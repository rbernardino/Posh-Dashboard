# Posh Dashboard

This project is a proof of concept for creating an Angular frontend using a PowerShell-based backend. The backend
runs on [PowerShell server](http://www.poshserver.net/).

## Setting Up Powershell Server

#### Download and install PowerShell server. 
* Follow the setup [here](https://www.automatedops.com/blog/2013/09/03/angular-posh/) to configure it to return JSON response.
#### Configure CORS
Angular comes with a built-in development server which runs on ```localhost:4200```. The PowerShell backend runs on localhost as well under a different port. To enable communication between them, CORS should be enabled on the PowerShell server. To configure CORS, 
* Go to ```C:\Program Files\PoSHServer\modules\PoSHServer``` and open *PoshServer.ps1*. 
* Just below this line:
  *  ```$Response.Headers.Add("X-Powered-By", "Microsoft PowerShell");```
* add the following line of code:
  *  ```$Response.Headers.Add("Access-Control-Allow-Origin", "*");```

For more information on CORS, go to [enable CORS.org](https://enable-cors.org/server.html).

## Running on Local Development Machine
* Clone this repo. 
  *  git clone https://github.com/rbernardino/Posh-Dashboard.git Posh-Dashboard
* Download FSTools PowerShell module from [FSTools repo](https://github.com/rbernardino/PS-FSTools).
* From the directory where FSTools was cloned, copy *FSTools* directory into ```C:\Program Files\WindowsPowerShell\Modules```.
* Run the PowerShell Backend
  ```powershell
  cd Posh-Dashboard\backend
  Start-PoshServer -HomeDirectory $(Get-Location).Path
  ```
* Run the local Angular Development server
  ```powershell
  cd Posh-Dashboard
  ng serve
  ```
* Test the installation
  ```http://localhost:4200```
