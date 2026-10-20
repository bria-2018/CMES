Add-Type -AssemblyName System.Drawing
$d = $PSScriptRoot
function Stitch($src, $hdrH, $y, $w, $h, $out) {
  $img = [System.Drawing.Image]::FromFile("$d\$src")
  $bmp = New-Object System.Drawing.Bitmap $w, $h
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.DrawImage($img, (New-Object System.Drawing.Rectangle 0,0,$w,$hdrH), (New-Object System.Drawing.Rectangle 0,0,$w,$hdrH), [System.Drawing.GraphicsUnit]::Pixel)
  $g.DrawImage($img, (New-Object System.Drawing.Rectangle 0,$hdrH,$w,($h-$hdrH)), (New-Object System.Drawing.Rectangle 0,$y,$w,($h-$hdrH)), [System.Drawing.GraphicsUnit]::Pixel)
  $bmp.Save("$d\$out", [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose(); $bmp.Dispose(); $img.Dispose()
}
Stitch "full_projects.png" 97 909 1440 900 "d_projects.png"
Stitch "full_about-us.png" 97 862 1440 900 "d_values.png"
Stitch "full_about-us.png" 97 1790 1440 900 "d_leadership.png"
Stitch "full_safety.png" 97 97 1440 900 "d_safety.png"
Stitch "full_mobile_home.png" 56 1690 500 1080 "m_services.png"
Stitch "full_mobile_home.png" 56 2600 500 1080 "m_numbers.png"
