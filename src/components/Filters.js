import React from "react";
import { CategoriesData } from "../data/CategoriesData";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon } from '@heroicons/react/20/solid'
import { RxCaretDown } from "react-icons/rx";
const YearData = [
  { title: "Sort By Year" },
  { title: "1700 - 1800" },
  { title: "1800 - 1900" },
  { title: "1900 - 2000" },
  { title: "2000 - 2010" },
  { title: "2010 - 2030" },
];
const TimeData = [
  { title: "Sort By Hours" },
  { title: "1 - 5" },
  { title: "5 - 10" },
  { title: "10 - 15" },
  { title: "15 - 20" },
];
const RatesData = [
  { title: "Sort By Rates" },
  { title: "1 Star" },
  { title: "2 Star" },
  { title: "3 Star" },
  { title: "4 Star" },
  { title: "5 Star" },
];
const Filters = () => {
  const [category, setCategory] = React.useState({ title: "Category" });
  const [year, setYear] = React.useState(YearData[0]);
  const [time, setTime] = React.useState(TimeData[0]);
  const [rates, setRates] = React.useState(RatesData[0]);
  const filter = [
    {
      value: category,
      onChange: setCategory,
      items: CategoriesData,
    },
    {
      value: year,
      onChange: setYear,
      items: YearData,
    },
    {
      value: time,
      onChange: setTime,
      items: TimeData,
    },
    {
      value: rates,
      onChange: setRates,
      items: RatesData,
    },
  ];
  return (
    <div className="my-6 bg-dry border text-dryGray border-gray-800 grid grid-cols-2 md:grid-cols-4  gap-2 lg:gap-12 rounded p-6">
      {filter.map((item, index) => (
        <Listbox key={index} value={item.value} onChange={item.onChange}>
          <div className="relative">
            <ListboxButton className="relative text-white border text-left bg-main border-gray-800 w-full rounded-lg py-4 pl-6 pr-10 text-xs">
              <span className="block truncate">{item.value.title}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <RxCaretDown className="w-5 h-5" aria-hidden="true" />
              </span>
            </ListboxButton>
            <ListboxOptions className="absolute z-10 w-full py-3 mt-1 overflow-auto text-base bg-white border border-gray-800 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {item.items.map((item, index) => (
                <ListboxOption
                  key={index}
                  className={({ active }) =>
                    `group relative cursor-default select-none py-2 pl-3 pr-4 ${
                      active ? "bg-subMain text-white" : "text-main"
                    }`
                  }
                  value={item}
                >
                 <div className="flex items-center gap-3">
                    <CheckIcon className="invisible size-4 group-data-[selected]:visible" />
                    <span className="block truncate font-normal group-data-[selected]:font-semibold"> {item.title}</span>
                 </div>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
      ))}
    </div>
  );
};

export default Filters;
