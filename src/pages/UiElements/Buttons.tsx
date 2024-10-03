import { Link } from 'react-router-dom';

import Breadcrumb from '../../components/Breadcrumb';

const Buttons = () => {
  return (
    <>
      <Breadcrumb pageName="Buttons" />

      {/* <!-- Normal Button Items --> */}
      <div className="mb-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">

        <div className="p-4 md:p-6 xl:p-9">
          <div className="mb-7.5 flex flex-wrap gap-5 xl:gap-20">
            <Link
              to="#"
              className="inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Button
            </Link>

            <Link
              to="#"
              className="inline-flex items-center justify-center rounded-md border border-primary py-4 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Button
            </Link>
          </div>

          <div className="mb-7.5 flex flex-wrap gap-5 xl:gap-20">

            <Link
              to="#"
              className="inline-flex items-center justify-center rounded-md bg-meta-3 py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Button
            </Link>

            <Link
              to="#"
              className="inline-flex items-center justify-center rounded-md border border-meta-3 py-4 px-10 text-center font-medium text-meta-3 hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Button
            </Link>
          </div>

          <div className="flex flex-wrap gap-5 xl:gap-20">
            <Link
              to="#"
              className="inline-flex items-center justify-center rounded-md bg-black py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Button
            </Link>
            <Link
              to="#"
              className="inline-flex items-center justify-center rounded-md border border-black py-4 px-10 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Button
            </Link>
          </div>
        </div>
      </div>

    </>
  );
};

export default Buttons;
