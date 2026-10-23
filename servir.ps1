# Abre a página em http://127.0.0.1:4420/ sem instalar nada.
param([int]$Porta = 4420)
$raiz = $PSScriptRoot
$tipos = @{ ".html"="text/html; charset=utf-8"; ".css"="text/css; charset=utf-8"; ".js"="text/javascript; charset=utf-8"; ".svg"="image/svg+xml"; ".png"="image/png"; ".jpg"="image/jpeg"; ".webp"="image/webp"; ".md"="text/plain; charset=utf-8" }
$ouvinte = [System.Net.HttpListener]::new()
$ouvinte.Prefixes.Add("http://127.0.0.1:$Porta/")
$ouvinte.Start()
Write-Host "Vibe House landing em http://127.0.0.1:$Porta/"
while ($ouvinte.IsListening) {
  $ctx = $ouvinte.GetContext()
  $caminho = [Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath.TrimStart('/'))
  if ($caminho -eq "") { $caminho = "index.html" }
  $arquivo = [System.IO.Path]::GetFullPath((Join-Path $raiz $caminho))
  if ($arquivo.StartsWith($raiz) -and (Test-Path $arquivo -PathType Leaf)) {
    $bytes = [System.IO.File]::ReadAllBytes($arquivo)
    $ext = [System.IO.Path]::GetExtension($arquivo).ToLower()
    $ctx.Response.ContentType = $(if ($tipos[$ext]) { $tipos[$ext] } else { "application/octet-stream" })
    $ctx.Response.Headers.Add("Cache-Control", "no-store")
    $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
  } else {
    $ctx.Response.StatusCode = 404
  }
  $ctx.Response.Close()
}
