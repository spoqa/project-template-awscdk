import { Code, Function, Runtime } from '@aws-cdk/aws-lambda';
import { App, Stack, StackProps } from '@aws-cdk/cdk';

interface ExampleStackProps extends StackProps {
}

class ExampleStack extends Stack {
    constructor(parent: App, name: string, props?: ExampleStackProps) {
        super(parent, name);

        const code = Code.asset('project-template-awscdk.zip');

        new Function(this, 'AnswerToTheUltimateQuestionOfLifeTheUniverseAndEverything', {
            runtime: Runtime.NodeJS810,
            code,
            handler: 'index.handler',
        });
    }
}

const app = new App();

new ExampleStack(app, 'Example');

app.run();
