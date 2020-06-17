import moment from "moment";
import { Fragment } from "react";

const UserProfileIntro = ({ user }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            {user && (
              <Fragment>
                <h5>{user.name}</h5>
                <a href={`${user.profile}`}>View Profile</a>
                <p className="text-muted">
                  Joined {moment(user.createdAt).fromNow()}
                </p>
              </Fragment>
            )}
            {!user && <h5>User not found</h5>}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default UserProfileIntro;
