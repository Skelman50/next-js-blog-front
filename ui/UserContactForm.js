const UserContactForm = ({ user }) => (
  <div className="col-md-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title bg-primary pb-4 pt-4 pl-4 pr-4 text-light">
          Message {user.name}
        </h5>
        <br />
        <p> contact form</p>
      </div>
    </div>
  </div>
);

export default UserContactForm;
