import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';
//通过link生成过滤容器，绑定dispatch 触发state visibilityFilter更新
const mapStateToProps = (state, ownProps) =>({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
});

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
export default FilterLink;
