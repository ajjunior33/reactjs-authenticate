const Alert = ({ type, title, message }) => {
  return (
    <div
      className={`alert alert-${type} alert-dismissible fade show`}
      role="alert"
    >
      <span className="alert-icon">
        <i className="ni ni-like-2"></i>
      </span>
      <span className="alert-text">
        <strong>{title}!</strong>
        {message}
      </span>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
export default Alert;
