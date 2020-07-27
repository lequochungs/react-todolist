import React, { SFC } from 'react';

interface IProps {}

const TodoListView: SFC<IProps> = (props) => {return (
        <form>
          <div className="flex mt-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
              placeholder="Add Todo"
            />
            <button
              type="button"
              className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
            >
              Add
            </button>
          </div>
        </form>
)
}

export default TodoListView;
