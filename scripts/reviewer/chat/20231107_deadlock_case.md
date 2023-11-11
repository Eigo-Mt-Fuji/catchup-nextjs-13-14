[API1]と[API2]を同時に実行した場合にデッドロックが発生する可能性があるか教えてください。
発生する可能性がある場合はその理由と該当する処理、修正方法の案を回答してください。

[API1]と[API2]はいずれもPostgres 15を使って実装されたWebアプリケーション(API)です。
それぞれの「処理内容:」に続く記載は、それぞれのAPIの処理のうち
行ロックが発生する部分に限定した処理の抜粋です。処理の順番と対象テーブル名と行ロックの種別（対象テーブルが複数ある場合カンマくぎりで）記載しています。

[API1]

処理内容:

1. project_user,project_user.corporation_id=? AND project_user.project_id=?,FOR UPDATE
2. project, project_id=?,FOR UPDATE
3. project_user, id=?, FOR UPDATE

[API2]

処理内容:

1. ・corporation, id=? FOR UPDATE
2. ・my_favorite_corporation, corporate_my_id=?, FOR UPDATE
3. ・my_favorite_product, corporate_my_id=?, FOR UPDATE
4. ・project,  FOR UPDATE
5. ・project_user,corporate_my_id=? FOR UPDATE
6. ・project_notice FOR UPDATE, FOR KEY SHARE, corporation FOR KEY SHARE
7. ・message, corporate_my_id=?, FOR UPDATE
8. ・user, id=? FOR UPDATE
