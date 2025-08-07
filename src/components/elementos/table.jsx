import Delete from "../../assets/svg/delete.svg";
import Edit from "../../assets/svg/edit.svg";
import Hidden from "../../assets/svg/hidden.svg"

function TableControl() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Fecha de publicacion</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>El tipo mas jodido</td>
          <td>Era un tipo muy jodidos</td>
          <td>16/05/2019</td>
          <td className="flex gap-2">
            <img src={Delete} alt="delete" className="hover:bg-red-500 p-2 cursor-pointer" />
            <img src={Edit} alt="edits" className="hover:bg-green-500 p-2 cursor-pointer"/>
            <img src={Hidden} alt="Hidden" className="hover:bg-gray-500 p-2 cursor-pointer"/>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default TableControl;
