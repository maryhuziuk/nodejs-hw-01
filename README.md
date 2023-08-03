
# nodejs-hw-01

This is a CLI nodeJS application that allow you to store your contacts  

### CLI Commands
####  To get your current list you need to run list action
```
node index.js --action="list"`
```
![List Command](https://monosnap.com/image/PiOnYT27RTqKhYK12sTUzzp58CnbJd)

#### To get your contact by id you need to run this
```
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6
```
![Get command](https://monosnap.com/image/xG5psWMFweTlaiie97KyFUzSfxWJpn)

#### To add a new contact you need to use add action
```
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22
```
![Add command](https://monosnap.com/image/UYKYTc4G5qMoW5qJpMpUx5XQuuYeCM) 

#### To remove a contact from list you need to run this command
```
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
```
![Delete command](https://monosnap.com/image/HG8aX9T5xSas0wVw4lwgNR3ktnrIeb)