# Posh Dashboard

This project is a proof of concept for creating an Angular frontend using a PowerShell-based backend. The backend
runs on [PowerShell server](http://www.poshserver.net/).

## Setting Up Powershell Server
* Download and install PowerShell server. Follow the setup [here](https://www.automatedops.com/blog/2013/09/03/angular-posh/) to configure it to return JSON response.
*  Configure CORS
  *  Angular comes with a built-in development server which runs on localhost:4200. The PowerShell backend
  runs on localhost as well under a different port. To enable communication between them, CORS should be 
  enabled on the PowerShell server. To configure CORS, 
  Go to C:\Program Files\PoSHServer\modules\PoSHServer and open PoshServer.ps1. 
  Just below this line:
  $Response.Headers.Add("X-Powered-By", "Microsoft PowerShell");
  Add the following line:
  $Response.Headers.Add("Access-Control-Allow-Origin", "*");
