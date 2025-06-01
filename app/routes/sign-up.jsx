import "../styles/auth/sign-up.css";

export default function SignUp() {
  return (
    <div className="sign-up-page">
      <h1>新規登録</h1>

      <div className="sign-up-form">
        <form>
          {/* メールアドレス */}
          <div className="form-group">
            <label htmlFor="email">メールアドレス</label>
            <input type="email" name="email" required />
          </div>
          {/* パスワード */}
          <div className="form-group">
            <label htmlFor="password">パスワード</label>
            <input type="password" name="password" required />
          </div>
          <button type="submit" className="sign-up-button">
            新規登録
          </button>
        </form>
        <p>ログインはこちら</p>
      </div>
    </div>
  );
}
