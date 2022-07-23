import { State } from "./meme.reducer";
import * as MemeActions from "./meme.actions";

import MemeComponent from "./meme.component";
import { connect } from "react-redux";

const mapStateToProps = (state: State) => {
    console.log(state)
  return {
    message: state.data.message,
    status: state.data.status,
  };
};
const mapDispatchToProps = (dispatch: any) => ({
  init: () => dispatch(MemeActions.init()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MemeComponent);
//export default Component
