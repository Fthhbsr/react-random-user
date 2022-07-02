import emailsvg from "../assets/email.svg";
import locationsvg from "../assets/location.svg";
import phonesvg from "../assets/phone.svg";

const Person = ({ first }) => {
  // const handleClick = (response) => {};
  // response();
  const {
    cell,
    dob,
    email,
    gender,
    location,
    name,
    picture,
    phone,
    nat,
    registered,
  } = first;

  return (
    <div className="container ">
      <div className="card" style={{ minWidth: 400 }}>
        <div className="row g-0">
          <div className=""></div>
          <div className="">
            <div className="card-body p-5">
              <div className="d-flex justify-content-between mt-2">
                <img
                  src={picture.medium}
                  className="img-fluid rounded-start"
                  alt="..."
                />
                <h5 className="card-title">
                  {name.title} {name.first} {name.last}
                </h5>
              </div>

              <div className="d-flex justify-content-between mt-2">
                <img src={emailsvg} alt="" style={{ width: "30px" }} />
                <p>{email}</p>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <img src={phonesvg} alt="" style={{ width: "30px" }} />
                <p>{cell}</p>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <img src={locationsvg} alt="" style={{ width: "30px" }} />
                <p>
                  {location.city}-{location.country}
                </p>
              </div>

              <p className="card-text text-end mt-2">Age : {dob.age}</p>
              <p className="card-text text-end mt-2">
                <small className="text-muted">
                  Register Date : {registered.date.slice(0, 10)}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
