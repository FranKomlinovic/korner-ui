export type AmplifyDependentResourcesAttributes = {
  "api": {
    "Terminihr": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string",
      "GraphQLAPIKeyOutput": "string"
    },
    "availableAppointments": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    }
  },
  "auth": {
    "Terminihr": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "HostedUIDomain": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "OAuthMetadata": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    }
  },
  "function": {
    "availableAppointments": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  },
  "hosting": {
    "S3AndCloudFront": {
      "CloudFrontDistributionID": "string",
      "CloudFrontDomainName": "string",
      "CloudFrontOriginAccessIdentity": "string",
      "CloudFrontSecureURL": "string",
      "HostingBucketName": "string",
      "Region": "string",
      "S3BucketSecureURL": "string",
      "WebsiteURL": "string"
    }
  },
  "storage": {
    "s3kornerfieldpictures": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}