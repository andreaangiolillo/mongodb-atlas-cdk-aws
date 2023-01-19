import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as atlas_proj from 'mongodb-atlas-project'
import { env } from 'node:process';

export class CdkMigrateFromCfnStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    if (env.ORG_ID == undefined){
      throw "ORG_ID is missing. Please, set the ORG_ID as an environment variable";
    }

    if (env.PUBLIC_KEY == undefined){
      throw "PUBLIC_KEY is missing. Please, set the PUBLIC_KEY as an environment variable";
    }

    if (env.PRIVATE_KEY == undefined){
      throw "PRIVATE_KEY is missing. Please, set the PRIVATE_KEY as an environment variable";
    }

    new atlas_proj.CfnProject(this, 'Project', {
      name: "ProjectCDK22",
      orgId: env.ORG_ID,
      apiKeys: {
        publicKey: env.PUBLIC_KEY,
        privateKey: env.PRIVATE_KEY
      }
    } )
  }
}
