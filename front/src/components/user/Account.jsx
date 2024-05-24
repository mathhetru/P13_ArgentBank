import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { updateProfileUser } from "../../services/ApiServices";

function Account() {
  const userFirstName = useSelector((state) => state.user.firstName);
  const userLastName = useSelector((state) => state.user.lastName);
  const token = useSelector((state) => state.auth.token);

  const [firstName, setFirstName] = useState(userFirstName);
  const [lastName, setLastName] = useState(userLastName);
  const [editForm, setEditForm] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setFirstName(userFirstName);
    setLastName(userLastName);
  }, [userFirstName, userLastName]);

  const handleClickEditNameBtn = () => {
    setEditForm(!editForm);
  };

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateProfileUser({ token, firstName, lastName }));
    setEditForm(!editForm);
  };

  const handleCancelUpdate = (e) => {
    e.preventDefault();
    setFirstName(userFirstName);
    setLastName(userLastName);
    setEditForm(!editForm);
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {userFirstName} {userLastName}!
        </h1>

        {editForm ? (
          <form className="form-update-name">
            <div className="form-update-name__input">
              <label htmlFor="username">Firstname</label>
              <input
                type="text"
                id="firstname"
                value={firstName}
                onInput={handleChangeFirstName}
                placeholder={userFirstName}
              />
            </div>
            <div className="form-update-name__input">
              <label htmlFor="password">Lastname</label>
              <input
                type="text"
                id="lastname"
                value={lastName}
                onInput={handleChangeLastName}
                placeholder={userLastName}
              />
            </div>
            <button className="form-update-name__button" onClick={handleUpdate}>
              Update Name
            </button>
            <button
              className="form-update-name__button-cancel"
              onClick={handleCancelUpdate}
            >
              Cancel
            </button>
          </form>
        ) : (
          <button className="edit-button" onClick={handleClickEditNameBtn}>
            Edit Name
          </button>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default Account;
