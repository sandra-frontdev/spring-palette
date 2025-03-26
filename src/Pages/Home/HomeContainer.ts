import { connect } from 'react-redux';
import { AppDispatch } from 'Store';
import { RootState } from 'Store/Reducers';

import { deleteColor, getColors, saveColor } from 'Store/Actions/ColorsActions';
import { Home } from './Home';

const mapStateToProps = (state: RootState) => ({
  colors: state.colors.colors,
  loading: state.colors.loading,
  error: state.colors.error
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  getColors: () => dispatch(getColors()),
  deleteColor: (id: string) => dispatch(deleteColor(id)),
  saveColor: (colorName: string, colorHex: string) =>
    dispatch(saveColor(colorName, colorHex)),
});

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
