# Termometer projekt - I hetaste laget
## Project Overview
### Description
This project contains a website (Vue), cloud database (AWS) and one or more IOT (NodeMCU) devices which uploads data to a cloud service.    
  
The IOT device is connected to a AM2320 sensor which measure both temperature and humidity. The IOT device then pushes it's measurements to the cloud where they are stored under uniqe IDs (MAC ID). The website (Vue) then pulls this information from the cloud to then be shown in graphs on the website.  
  
The IOT devices must be registered and given a specific update frequency in order for the connection to the cloud to function.
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
### DynamoDB
Vilka objekt och dess egenskaper som lagras på databasen. Deras unika ID är dess MAC-address och det används sedan för att specifikt ange vilken enhet som ropas på.  
  
*DynamoDB view*
![DynamoDB](https://github.com/190sTermometer/Images/blob/master/ImageReadMe/DynamoDB.png)
### API Gateway
Detta är konfiguratioen för APIn och vilka komponenter som ingår.  
  
*Deployed API*
![Deployed View](https://github.com/190sTermometer/Images/blob/master/ImageReadMe/API%20deployed.png)
  
*API resource view*  
![Resource View](https://github.com/190sTermometer/Images/blob/master/ImageReadMe/API%20recource%20config.png)
  
**Förtydligande av konfiguration**
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
### IOT
Skrivet i Arduino IDE och uppladat till NodeMCU kopplat till en AM2320 sensor.   
[Datablad för AM2320 sensor.](https://akizukidenshi.com/download/ds/aosong/AM2320.pdf)
