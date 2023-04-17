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
    };
    hosting: {
        S3AndCloudFront: {
            HostingBucketName: "string";
            Region: "string";
            S3BucketSecureURL: "string";
            WebsiteURL: "string";
        };
    };
};
