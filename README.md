# Termometer projekt - I hetaste laget
## Project Overview
### Description
This project contains a website (Vue), cloud database (AWS) and one or more IOT (NodeMCU) devices which uploads data to a cloud service.    
  
The IOT device is connected to a AM2320 sensor which measure both temperature and humidity. The IOT device then pushes it's measurements to the cloud where they are stored under uniqe IDs (MAC ID). The website (Vue) then pulls this information from the cloud to then be shown as graphs on the website. The website also has a user function which uses a diffirent database for storing it's users.  
  
The IOT devices must be registered and given a specific update frequency, using the key 'updateInterval' in order for the connection to the cloud to function. The IOT device then every x (insert updateInterval) seconds takes a measurement and pushes it to the database through a PUT function.
## Project Configuration
### Vue (Frontend)
**Project setup**

```
npm install
```

**Compiles and hot-reloads for development**

```
npm run serve
```

**Compiles and minifies for production**

```
npm run build
```

**Run your tests**

```
npm run test
```

**Lints and fixes files**

```
npm run lint
```

**Customize configuration**

See [Configuration Reference](https://cli.vuejs.org/config/).

## AWS & IOT (Backend)
### DynamoDB - Devices
Which objects and its traits that are stored on the database. Their MAC addres is their unique ID and it's used to specify which object to modify.
  
*DynamoDB view*
![DynamoDB](https://github.com/190sTermometer/Images/blob/master/ImageReadMe/DynamoDB.png)
### API Gateway - Devices
The configuration for the API and which componentes it includes.  
  
*Deployed API*
![Deployed View](https://github.com/190sTermometer/Images/blob/master/ImageReadMe/API%20deployed.png)
  
*API resource view*  
![Resource View](https://github.com/190sTermometer/Images/blob/master/ImageReadMe/API%20recource%20config.png)
  
**Clarification**
```
--/device
 --- Delete remove.js (Lambda Proxy integration, MAC)
 --- Get getDevice.js (Lambda Proxy integration, MAC)
 --- Post createDevice.js (Lambda Proxy integration, MAC)
 --- Patch updateDevice.js (Lambda Proxy integration, MAC)
  --/data
   --- Put uploadData.js (Lambda Proxy integration, MAC) 
   --- Delete clearData.js  (Lambda Proxy integration, MAC)
  --/registered
   --- Get getRegisteredDevices.js 
   --- Put registerDevice.js (Lambda Proxy integration, MAC) 
  --/unregistered
   --- Get getUnregisteredDevices.js

```
### IOT - Devices
The script is written in Arduino IDE and is then ported to a NodeMCU that is connected to a AM2320 sensor.
[Datablad för AM2320 sensor.](https://akizukidenshi.com/download/ds/aosong/AM2320.pdf)

### DynamoDB - Users
The only diffirence between 'DynamoDB - Devices' and 'DynamoBD - Users' are which values that the API store. In this case it's users and the other devices. The users unique ID is their name (key: 'namn').
  
*DynamoDB view*
![Dynamo user](https://github.com/190sTermometer/Images/blob/master/ImageReadMe/User%20Dynamo.png)
### API Gateway - Users
*Deployed API*
![2](https://github.com/190sTermometer/Images/blob/master/ImageReadMe/User%20API%20stage.png)
*API resource view*  
![1](https://github.com/190sTermometer/Images/blob/master/ImageReadMe/User%20API%20resources.png)
  

**Clarification**
```
--/user
 --- Post createDevice.js
 --- Get getDevice.js (Lambda Proxy integration, password & namn)
```
