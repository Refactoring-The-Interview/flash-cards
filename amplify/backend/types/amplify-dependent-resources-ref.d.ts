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
};
