# How to use the VPN
Some service nodes where the server is located can realize SSH connection only after connecting to the VPN.

## Windows  
### 1 openVPN client   
#### 1.1 Downloading the Client
Please click the link [Downloading the openVPN client](https://obs.cstcloud.cn/share/obs/cstcloud/OpenVPN-2.5.4-I604-amd64.msi)

#### 1.2 Installing the Client 
* Click【next】 to proceed to the next step.

![pic1 install_openVPN(1)](./img/1-openVPN-1.jpg)

* Click【I Agree】to proceed to the next step. 

![pic2 install_openVPN(2)](./img/1-openVPN-2.png)

* Use the default components, and then click【next】 to proceed to the next step. 

![pic3 install_openVPN(3)](./img/1-openVPN-3.jpg)

* The default directory can be used as the installation directory without modification, 
click 【Install】 to start the installation. 

![pic4 install_openVPN(4)](./img/1-openVPN-4.jpg)

### 2 Configuration file

* After the openVPN client is installed, there are two configuration files which need to be configured before it can be used.
They are: 1. VPN node configuration file  2. CA certificate file

* The configuration file corresponds to the service node, that is, **the server in the same service node uses the same configuration file, and only needs to be configured once.**  

####  2.1 Downloading the Configuration File   
* The downloading location is shown in Figure 5, click 【Download】 to start the download; some browsers need to right-click the link and select "Save As File".

![pic5 The downloading location of configuration file](./img/2-configfiles.jpg)

#### 2.2 Moving the Configuration File
* Move the two files just downloaded to the specified save path of configuration file.   
  The default configuration file save path of openVPN is：C:\Program Files\OpenVPN\config, as shown in Figure 6. (If the directory location is modified during the installation process, you need to find the corresponding path by yourself.) 
  

![pic6 The configuration directory of configuration file](./img/3-configfiles.jpg)

* If you encounter a prompt, "You need to provide administrator privileges to move files", during the copying process, just click 【Continue】.  
![pic7 administrator_privileges](./img/3-admin.jpg)  

### 3 Start the VPN connection  

* Double-click the openVPN client icon![Alt text](./img/4-openVPN-icon.jpg), if ![Alt text](./img/4-bottom-right-icon.jpg) appears in the lower right corner of the taskbar, this indicates that the client is started.

* Right-click ![Alt text](./img/4-bottom-right-icon.jpg), select the corresponding configuration, such as “gosc_235_3”, click【connect】
![pic8 connection page](./img/4-connect.jpg)

* Enter username and password according to the prompt, and then click 【OK】. Check “Save password”, and the next time you log in, the password will be remembered to avoid multiple input. **Username and password are available on the configuration file download page.**

![pic9 enter username and password](./img/4-user-password.jpg)

* After the connection is successful, the lower right corner of the taskbar will appear: ![Alt text](./img/4-conn-success.png) , this means that the VPN is connected. At this point, SSH connection can be made to the server.


## macOS
updating...
