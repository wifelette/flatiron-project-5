import React, { useState, useEffect } from "react";
import "../App.css";
import HeaderBar from "./header/HeaderBar";
import { useSelector, useDispatch } from "../index";
import AddDaysForm from "./days/AddDaysForm";
import { DAYS_URL, ACTIVITIES_URL } from "../App";
import { getJSON } from "../utils/jsonapi";
import Schedule from "./days/Schedule";

// This is a functional component (using hooks). It's significantly simpler than the Class components method. You can see both here for demo purposes. To swap which is in use, change the `export default` from one to the other.
export default function FunctionalDashboard() {
  let dispatch = useDispatch();

  let [isShowingForm, setShowingForm] = useState(false);

  useEffect(() => {
    fetchDays();
    fetchActivities();
  }, []);

  const fetchDays = async () => {
    /** @type {{ data: Day[] }} */
    const newDays = await getJSON(
      `${DAYS_URL}.json?sort=date&include=activities.materials`
    );
}

// This is the same thing, but using a class-based component instead of a functional component. It's here for demo purposes, it is not currently in use.

// The reason I'm using a function instead of a const is for being able to use it with TypeScript more easily, it has no effect otherwise (because we're not using `this` in it).

/**
 * @param {import("../reducers").AppState} state
 */
function mapStateToProps(state) {
  return { days: state.days };
}

/**
 * @param {import("..").AppDispatch} dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    fetchDays: () => dispatch(fetchDays()),
    fetchActivities: () => dispatch(fetchActivities()),
  };
}

class DashboardComponent extends React.Component {
  state = {
    isShowingForm: false,
  };

  componentDidMount() {
    this.props.fetchDays();
    this.props.fetchActivities();
  }

  render() {
  return (
    <div>
      <HeaderBar
        headline="Dashboard"
        mainButton="Add a New Day"
        onButtonClick={() => {
            this.setState({ isShowingForm: !this.state.isShowingForm });
        }}
      />
        {this.state.isShowingForm ? (
          <AddDaysForm onSave={() => this.setState({ isShowingForm: false })} />
      ) : null}
        {
          /** @type {any} */ (this.props).days.map((/** @type {any} */ day) => (
        <Schedule key={day.id} day={day} />
          ))
        }
    </div>
  );
}
}

// export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
