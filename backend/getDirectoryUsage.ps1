$directory = 'c:\temp'
if (-not (Test-Path $directory))
{
  return @{
    Error = "$Directory does not exist"
  } | Convertto-json
}

Get-DirectoryUsage $directory -Verbose | ConvertTo-Json
