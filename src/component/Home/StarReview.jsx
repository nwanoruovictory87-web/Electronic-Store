function StarReview({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return (
    <div className="flex items-center flex-row-reverse">
      {[...Array(fullStars)].map((_, index) => (
        <i key={index} className="fa fa-star text-yellow-500 text-sm"></i>
      ))}
      {halfStar && (
        <i className="fa fa-star-half-o text-yellow-500 text-sm"></i>
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <i key={index} className="fa fa-star-o text-yellow-500 text-sm"></i>
      ))}
    </div>
  );
}
export default StarReview;
