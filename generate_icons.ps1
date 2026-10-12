$ErrorActionPreference = "Stop"

$srcPath = "C:\Users\ayema\Downloads\GetCallAxis-logo-dark.png"
if (-not (Test-Path $srcPath)) {
    Write-Error "Source file not found at $srcPath"
    exit 1
}

$targetDir = $PSScriptRoot
$publicDir = Join-Path $targetDir "public"
$logoDir = Join-Path $publicDir "logo"

if (-not (Test-Path $publicDir)) { New-Item -ItemType Directory -Path $publicDir -Force | Out-Null }
if (-not (Test-Path $logoDir)) { New-Item -ItemType Directory -Path $logoDir -Force | Out-Null }

# 1. Copy og-image.png
Copy-Item $srcPath (Join-Path $targetDir "og-image.png") -Force
Copy-Item $srcPath (Join-Path $publicDir "og-image.png") -Force
Write-Host "Copied og-image.png"

# 2. Extract circular icon
Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile($srcPath)
$cx = 960.0
$cy = 486.0
$r = 334.0

function Create-ResizedIcon($srcBmp, [int]$size, [float]$centerX, [float]$centerY, [float]$radius) {
    $dest = New-Object System.Drawing.Bitmap $size, $size, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($dest)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)

    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $path.AddEllipse(0, 0, $size, $size)
    $g.SetClip($path)

    $srcRect = New-Object System.Drawing.RectangleF ($centerX - $radius), ($centerY - $radius), ($radius * 2), ($radius * 2)
    $destRect = New-Object System.Drawing.RectangleF 0, 0, $size, $size
    $g.DrawImage($srcBmp, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

    $g.Dispose()
    return $dest
}

# Generate 512
$icon512 = Create-ResizedIcon $src 512 $cx $cy $r
$icon512.Save((Join-Path $targetDir "logo-icon-512.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$icon512.Save((Join-Path $logoDir "logo-icon-512.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$icon512.Save((Join-Path $publicDir "logo-icon-512.png"), [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Generated logo-icon-512.png"

# Generate 192
$icon192 = Create-ResizedIcon $src 192 $cx $cy $r
$icon192.Save((Join-Path $targetDir "icon-192.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$icon192.Save((Join-Path $publicDir "icon-192.png"), [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Generated icon-192.png"

# Generate 180 (apple-touch-icon)
$icon180 = Create-ResizedIcon $src 180 $cx $cy $r
$icon180.Save((Join-Path $targetDir "apple-touch-icon.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$icon180.Save((Join-Path $publicDir "apple-touch-icon.png"), [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Generated apple-touch-icon.png"

# Generate 48
$icon48 = Create-ResizedIcon $src 48 $cx $cy $r
$icon48.Save((Join-Path $targetDir "favicon-48.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$icon48.Save((Join-Path $publicDir "favicon-48.png"), [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Generated favicon-48.png"

# Generate 32
$icon32 = Create-ResizedIcon $src 32 $cx $cy $r
$icon32.Save((Join-Path $targetDir "favicon-32.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$icon32.Save((Join-Path $publicDir "favicon-32.png"), [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Generated favicon-32.png"

# Generate 16
$icon16 = Create-ResizedIcon $src 16 $cx $cy $r
$icon16.Save((Join-Path $targetDir "favicon-16.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$icon16.Save((Join-Path $publicDir "favicon-16.png"), [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Generated favicon-16.png"

# Build favicon.ico (multi-size ICO container with 16, 32, 48 PNG frames)
function Create-IcoFile([string[]]$pngPaths, [string]$outIcoPath) {
    $pngBuffers = @()
    foreach ($p in $pngPaths) {
        $pngBuffers += ,[System.IO.File]::ReadAllBytes($p)
    }
    
    $fs = [System.IO.File]::Create($outIcoPath)
    $bw = New-Object System.IO.BinaryWriter $fs
    
    # ICONDIR
    $bw.Write([uint16]0) # Reserved
    $bw.Write([uint16]1) # Type 1 = ICO
    $bw.Write([uint16]$pngBuffers.Count) # Image count
    
    # Calculate offset
    $offset = 6 + ($pngBuffers.Count * 16)
    
    for ($i = 0; $i -lt $pngBuffers.Count; $i++) {
        $buf = $pngBuffers[$i]
        $size = 0
        if ($i -eq 0) { $size = 16 }
        elseif ($i -eq 1) { $size = 32 }
        elseif ($i -eq 2) { $size = 48 }
        
        $bw.Write([byte]$size) # Width
        $bw.Write([byte]$size) # Height
        $bw.Write([byte]0)     # Color count
        $bw.Write([byte]0)     # Reserved
        $bw.Write([uint16]1)   # Color planes
        $bw.Write([uint16]32)  # BPP
        $bw.Write([uint32]$buf.Length) # Size of image data
        $bw.Write([uint32]$offset)     # Offset to image data
        
        $offset += $buf.Length
    }
    
    foreach ($buf in $pngBuffers) {
        $bw.Write($buf)
    }
    
    $bw.Flush()
    $bw.Close()
    $fs.Close()
}

$icoList = @(
    (Join-Path $targetDir "favicon-16.png"),
    (Join-Path $targetDir "favicon-32.png"),
    (Join-Path $targetDir "favicon-48.png")
)
Create-IcoFile $icoList (Join-Path $targetDir "favicon.ico")
Create-IcoFile $icoList (Join-Path $publicDir "favicon.ico")
Write-Host "Generated favicon.ico"

# Clean up bitmaps
$icon512.Dispose()
$icon192.Dispose()
$icon180.Dispose()
$icon48.Dispose()
$icon32.Dispose()
$icon16.Dispose()
$src.Dispose()

# Create manifest.json
$manifest = @{
    name = "GetCallAxis"
    short_name = "GetCallAxis"
    description = "Connect with Local Insurance Agents & Home Service Pros"
    start_url = "/"
    display = "standalone"
    background_color = "#0B1220"
    theme_color = "#0F766E"
    icons = @(
        @{
            src = "/icon-192.png"
            sizes = "192x192"
            type = "image/png"
        },
        @{
            src = "/logo-icon-512.png"
            sizes = "512x512"
            type = "image/png"
        }
    )
} | ConvertTo-Json -Depth 5

$manifest | Set-Content (Join-Path $targetDir "manifest.json") -Encoding UTF8
$manifest | Set-Content (Join-Path $publicDir "manifest.json") -Encoding UTF8
$manifest | Set-Content (Join-Path $targetDir "site.webmanifest") -Encoding UTF8
$manifest | Set-Content (Join-Path $publicDir "site.webmanifest") -Encoding UTF8
Write-Host "Generated manifest.json and site.webmanifest"
