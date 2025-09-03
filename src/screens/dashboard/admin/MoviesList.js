import Table from "../../../components/Table";
import { moviesData } from "../../../data/moviesData";
import Sidebar from "../Sidebar";
function MoviesList({ movies }) {
  return (
    <Sidebar>
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Movies List</h2>
          <button className="bg-main transitions hover:bg-subMain border border-subMain text-white font-medium px-3 sm:px-6 sm:w-auto py-3 rounded">
            Delete All
          </button>
        </div>
        <Table data={moviesData} admin={true} />
      </div>
    </Sidebar>
  );
}

export default MoviesList;
