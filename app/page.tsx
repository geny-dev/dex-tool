import DashSmTable1 from '#/ui/dash-sm-table1';
import DashSmTable2 from '#/ui/dash-sm-table2';
import HotPairs from '#/ui/dash-hotpairs';
import ColorToggleButton from '#/ui/colortogglebutton';
import '#/app/styling/global-css/styles.css'

// import DashSmTable2 from '#/ui/dash-sm-table2';
// import DashSmTable3 from '#/ui/dash-sm-table3';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="space-y-8">

      <div className="space-y-10 text-white">
        
        <div className="space-y-5">

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {/* {section.items.map((item) => {
              return (
                <Link
                  href='#'
                  className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                >
                  <div className="font-medium text-gray-200 group-hover:text-gray-50">
                  </div>

                  {item.description ? (
                    <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-300">
                      {item.description}
                    </div>
                  ) : null}
                </Link>
              );
            })} */}
            <div className="font-medium text-gray-200 group-hover:text-gray-50 dark-tb rounded-xl">
              <ColorToggleButton />
              <DashSmTable1 />
            </div>
            <div className="font-medium text-gray-200 group-hover:text-gray-50">
              <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-300">
                sadfasdf
              </div>
              <DashSmTable2 />
            </div>
          </div>
          <HotPairs />
        </div>
      </div>
    </div>
  );
}


