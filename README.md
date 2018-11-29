Project Template for AWS CDK Apps
=================================

프로젝트 구조
-------------

 - `/cdk`: CDK stack 및 construct들
   - `/cdk/index.ts` CDK 앱의 진입점
 - `/src`: AWS Lambda를 사용할 경우, Lambda
 - `/test`: 유닛테스트 코드를 모아 두는 곳. `.spec.ts`로 끝나는 파일은 테스트 수트로 취급됩니다.
 - `index.ts` AWS Lambda 함수의 진입점. AWS Lambda는 최상위 경로에 있는 파일만 핸들러로 지정할 수 있어서 이를 우회하기 위함.

팁
--

 - NPM에서 받은 패키지를 AWS Lambda로 보낼 코드에서 사용하고 싶다면, `npm install -B` 또는 `--save-bundle` 플래그로 에셋에 포함시킬 수 있습니다.
