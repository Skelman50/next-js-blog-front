import moment from "moment";
import { Fragment } from "react";
import { API } from "../config";

const UserProfileIntro = ({ user }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            {user && (
              <div className="row">
                <div className="col-md-8">
                  <h5>{user.name}</h5>
                  <p className="text-muted">
                    Joined {moment(user.createdAt).fromNow()}
                  </p>
                </div>
                <div className="col-md-4">
                  <img
                    style={{ maxHeight: "150px" }}
                    className="img img-fluid img-thumbnail"
                    srcSet={`${API}/user/photo/${user.username}`}
                    alt=""
                  />
                </div>
              </div>
            )}
            {!user && <h5>User not found</h5>}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default UserProfileIntro;
