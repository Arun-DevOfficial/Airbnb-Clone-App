import React from "react";

const Toggle = () => {
  return (
    <>
      <div className="bg-white ring-1 ring-slate-200 rounded-lg border border-solid border-slate-200 p-3 mt-4 sm:hidden flex justify-between items-center space-x-8">
        <div className="flex-shrink-0">
          <h1 className="font-medium text-md text-black/70">
            Display total price
          </h1>
          <p className="font-medium text-base text-black/40">
            Includes all fees,before taxes
          </p>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input type="checkbox" className="toggle toggle-white toggle-lg hover:[--tglbg:black] hover:bg-white border-solid border-slate-300" />
          </label>
        </div>
      </div>
    </>
  );
};

export default Toggle;
