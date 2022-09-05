# Setting up a VPN
Some Service Units require a VPN to establish an SSH connection.

## Windows  
### 1 Install the openVPN client   
#### 1.1 Download the openVPN Client
Please click the link [openVPN client](https://obs.cstcloud.cn/share/obs/cstcloud/OpenVPN-2.5.4-I604-amd64.msi) to download the client.

#### 1.2 Install the openVPN Client 
* Click 'Next'.

![pic1 install_openVPN(1)](./img/1-openVPN-1.jpg)

* Click 'I Agree'. 

![pic2 install_openVPN(2)](./img/1-openVPN-2.png)

* Left default components chosen, and then click 'next'. 

![pic3 install_openVPN(3)](./img/1-openVPN-3.jpg)

* Left default install directory or choose as needed, 
click 'Install' to start the installation. 

![pic4 install_openVPN(4)](./img/1-openVPN-4.jpg)

### 2 Install configuration files

* There are two configuration files need to be installed before starting a VPN: 1. VPN node configuration file  2. CA certificate file

* Each Service Unit offers only one set of configuration files. That is, **all the servers in the same Service Unit shares the same set of configuration files.**  

####  2.1 Download the Configuration Files   
* As shown in Figure 5, click 'Download' to start the download of CA file and Config File.

![pic5 The downloading location of configuration file](./img/2-configfiles.jpg)

#### 2.2 Install the Configuration Files
* Move the two files to the openVPN's folder.   
  The default folder of openVPN is：C:\Program Files\OpenVPN\config, as shown in Figure 6. (If the directory location is modified during the installation process, you need to find the corresponding path by yourself.) 
  

![pic6 The configuration directory of configuration file](./img/3-configfiles.jpg)

* If you encounter a prompt, "You need to provide administrator privileges to move files", during the moving process, just click 'Continue'.  
![pic7 administrator_privileges](./img/3-admin.jpg)  

### 3 Start the VPN connection  

* From desktop, double-click the openVPN client icon![Alt text](./img/4-openVPN-icon.jpg). If ![Alt text](./img/4-bottom-right-icon.jpg) appears in the lower right corner of the taskbar, this indicates that the client is started.

* Right-click on the icon ![Alt text](./img/4-bottom-right-icon.jpg), select the corresponding configuration, such as “gosc_235_3”, click 'connect'
![pic8 connection page](./img/4-connect.jpg)

* Enter username and password in the prompt, and then click 'OK'. Check “Save password” if needed, the password will be remembered to avoid future input. **Username and password are available on the configuration file download page.**

![pic9 enter username and password](./img/4-user-password.jpg)

* If the connection is successful, the lower right corner of the taskbar will appear: ![Alt text](./img/4-conn-success.png) , this means that the VPN is connected.


## macOS
### 1 Configuration file

* There are two configuration files need to be installed before starting a VPN: 1. VPN node configuration file  2. CA certificate file

* Each Service Unit offers only one set of configuration files. That is, **all the servers in the same Service Unit shares the same set of configuration files.**
* 
####  1.1 Download the Configuration Files   
* As shown in the following figure, click 'Download' to start the download of CA file and Config File.
![pic10 The downloading location of configuration file](./img/2-configfiles.jpg)

#### 1.2 Move the Configuration Files
* Move these two files in the same folder, such as the following location: /Applications/OpenVPN Connect
(Installation directory can be customized.)

* If you encounter a prompt, 'Modifying OpenVPN requires an administrator name and password' during the moving process, please click 'Authenticate' directly.
![pic11 administrator permissions(1)](./img/6-2.jpg)

* Enter the username and password on the pop-up page, and click 'Ok'.
![pic12 administrator permissions(2)](./img/6-3.jpg)

#### 1.3 Trust the CA certificate file
* Launchpad > Others > Keychain Access.
![pic13 Keychain Access(1)](./img/6-4.jpg)

* Select 'System' in the left-hand column.
![pic14 Keychain Access(2)](./img/6-5.jpg)

* Import the certificate file into the 'System' keychain. As shown in the figure below, the CA certificate file is not trusted at this time.
![pic15 import the certificate file](./img/6-6.jpg)

* Double-click the CA certificate file, and then click the triangle button on the left side of 'Trust' to expand its options.

![pic16 trust the ca（1）](./img/6-7.jpg)

* Change the default option 'Use System Defaults' of the first item to 'Always Trust'. 
* After the modification, other options will be changed accordingly, and the modification can be completed by closing the page.

![pic17 trust the ca（2）](./img/6-8.jpg)

![pic18 trust the ca（3）](./img/6-9.jpg)

* After the trust configuration is completed, the interface shown in the following figure will be displayed.
![pic19 trust the ca（4）](./img/6-10.jpg)


### 2 Install the Tunnelblick and Start the VPN connection
#### 2.1 Downloading the Tunnelblick Client
Please click the link [Tunnelblick client](https://tunnelblick.net/release/Latest_Tunnelblick_Stable.dmg) to download Tunnelblick client.

#### 2.2 Installation and Configuration

* Click the downloaded file will pop up the figure as shown below.

![pic20 Tunnelblick client download（1）](./img/7-1.jpg)

* Follow the instructions on the figure to implement the installation process. 
* After the installation is complete, a prompt message for configuring configuration files will appear, 
and operate as required.

![pic21 Tunnelblick configuration files（1）](./img/7-2.jpg)

* Or double-click the Tunnelblick client button in the upper right corner of the screen to pop up the configuration page.
* Manually import the VPN node configuration file into the 'Configurations' column on the left, and select 'Only Me' on the pop-up page.
![pic22 Tunnelblick configuration files（2）](./img/7-3.jpg)

* At this point, the configuration process of the VPN node configuration file is finished.
![pic23 Tunnelblick configuration files（3）](./img/7-4.jpg)

* If there is a warning about the Tunnelblick version, just click 'Ok'.
![pic24 Tunnelblick configuration files（4）](./img/7-5.jpg)

* Then left-click the Tunnelblick client button in the upper right corner and select the connect option.
![pic25 Tunnelblick Connection(1)](./img/7-6.jpg)

* Enter the username and password, the 'Security code' can be ignored temporarily.
(Username and password are available on the download page of the configuration file.)
![pic26 Tunnelblick Connection(2)](./img/7-7.jpg)

* If there is a prompt or warning as shown in Figure 27 or 28, you can directly click 'Ok' to skip.
![pic27 Tunnelblick Connection(3)](./img/7-8.jpg)
![pic28 Tunnelblick Connection(4)](./img/7-9.jpg)

* After the connection is successful, the Tunnelblick button in the upper right corner will turn dark, and a page indicating the connection status will appear when you right-click the button.
* At this point, SSH connection can be implemented to the server.
![pic29 Tunnelblick Connection Successfully](./img/7-10.jpg)




