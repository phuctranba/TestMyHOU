export const isEnd = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 50;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};
