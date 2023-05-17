export type AmplifyDependentResourcesAttributes = {
    api: {
        FlashCardsApiGroup: {
            ApiId: "string";
            ApiName: "string";
            RootUrl: "string";
        };
    };
    function: {
        QuestionApi: {
            Arn: "string";
            LambdaExecutionRole: "string";
            LambdaExecutionRoleArn: "string";
            Name: "string";
            Region: "string";
        };
        questionLamdaFunc: {
            Arn: "string";
            LambdaExecutionRole: "string";
            LambdaExecutionRoleArn: "string";
            Name: "string";
            Region: "string";
        };
    };
    hosting: {
        S3AndCloudFront: {
            HostingBucketName: "string";
            Region: "string";
            S3BucketSecureURL: "string";
            WebsiteURL: "string";
        };
    };
    storage: {
        questionsTable: {
            Arn: "string";
            Name: "string";
            PartitionKeyName: "string";
            PartitionKeyType: "string";
            Region: "string";
            StreamArn: "string";
        };
    };
};
