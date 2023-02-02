
## Pre requirements
### Install and configure AWS CLI
```
brew install awscli
```

### Configure AWS CLI
You must configure your workstation with your credentials and an AWS Region, if you have not already done so. If you have the AWS CLI installed, we recommend running the following command:

```
aws configure
```
Provide your AWS access key ID, secret access key, and default Region when prompted.

### Configure the env variables

```
export PUBLIC_KEY=<YOUR-ATLAS-ORG-ID>
export PRIVATE_KEY=<YOUR-ATLAS-ORG-ID>
export ORG_ID=<YOUR-ATLAS-ORG-ID>
```

### Download the repository and access the project folder
```
git clone git@github.com:andreaangiolillo/mongodb-atlas-cdk-aws.git
cd mongodb-atlas-cdk-aws.git
```

## Create the Cloud Formation Stack with the CDK
### Run cdk diff
```
cdk diff
```

### Run cdk deploy
```
cdk deploy
```


## Additional Resources
- Demo: : https://drive.google.com/file/d/1xyX-HDgLJmtjxJaWhOPBaItWCEheWus5/view?usp=sharing
