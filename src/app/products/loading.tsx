export default function Loading() {
    const listItems = new Array(8).map((_, index) => (
      <li
        key={index}
        className="p-4 bg-gray-300 rounded-2xl max-w-64 min-h-100"
      ></li>
    ));
    return (
      <div>
        <ul className="grid grid-cols-4 gap-4">{listItems}</ul>
      </div>
    );
  }