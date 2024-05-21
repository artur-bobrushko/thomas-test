// @ts-nocheck
"use client";

import Header from "@/components/Header";
import Star from "@/icons/star";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { data } from "@/utils/sampleData";
import { useState } from "react";

export default function Home() {
  const [dataToShow, setDataToShow] = useState<any>(null);
  const [filter, setFilter] = useState<any>({
    venue: "",
    day: "",
    type: "",
  });
  const filteredMusics: any = [
    ...new Set(data.map((item) => item.musics).flat()),
  ];

  const filteredData = data
    .filter((item) => {
      const obj = { ...item };
      if (filter.venue) {
        if (obj.name === filter.venue) {
          return obj;
        }
      } else return obj;
    })
    .filter((item) => {
      const obj = { ...item };
      if (filter.day) {
        if (obj.daysOpened.includes(filter.day)) {
          return obj;
        }
      } else return obj;
    })
    .filter((item) => {
      const obj = { ...item };
      if (filter.type) {
        if (obj.musics.includes(filter.type)) {
          return obj;
        }
      } else return obj;
    });

  return (
    <main className="min-h-screen">
      <Header />
      <section className="bg-hero pt-[96px] bg-cover bg-no-repeat bg-center">
        <div className="container max-w-7xl mx-auto pt-32 pb-16">
          <span className="text-xl font-medium text-white tracking-widest">
            BOOK YOUR
          </span>
          <h1 className="text-[48px] font-larken text-white mb-16">
            Luxury Experience in Barcelona
          </h1>
          <div className="mb-8">
            <div className="flex w-fit items-center bg-opacity-[88%] bg-white rounded-br-lg rounded-bl-lg rounded-tl-lg rounded-tr-lg overflow-hidden cursor-pointer">
              <div className="px-5 py-4">
                <Select
                  onValueChange={(e) =>
                    setFilter((prevState: any) => ({
                      ...prevState,
                      venue: e,
                    }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Venue" className="outline-none" />
                  </SelectTrigger>
                  <SelectContent>
                    {data.map((item, idx) => (
                      <SelectItem key={idx} value={item.name}>
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-px h-[30px] bg-[#C3CAD0]" />
              <div className="px-5 py-4 ">
                <Select
                  onValueChange={(e) =>
                    setFilter((prevState: any) => ({
                      ...prevState,
                      day: e,
                    }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder="Any day"
                      className="outline-none"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Mon">Monday</SelectItem>
                    <SelectItem value="Tue">Tuesday</SelectItem>
                    <SelectItem value="Wed">Wednesday</SelectItem>
                    <SelectItem value="Thu">Thursday</SelectItem>
                    <SelectItem value="Fri">Friday</SelectItem>
                    <SelectItem value="Sat">Saturday</SelectItem>
                    <SelectItem value="Sun">Sunday</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-px h-[30px] bg-[#C3CAD0]" />
              <div className="px-5 py-4 ">
                <Select
                  onValueChange={(e) =>
                    setFilter((prevState: any) => ({
                      ...prevState,
                      type: e,
                    }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Guest" className="outline-none" />
                  </SelectTrigger>
                  <SelectContent>
                    {filteredMusics.map((item: any, idx: any) => {
                      return (
                        <SelectItem key={idx} value={item}>
                          {item}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-px h-[30px] bg-[#C3CAD0]" />
              <div className="px-5 py-4">
                <Button
                  onClick={() => setDataToShow(filteredData)}
                  className="bg-white border border-gray-300 font-medium font-larken text-black hover:bg-background/80"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
          <div className="flex mb-2 items-center gap-x-2">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <span className="text-xs text-white">3,200+ verified reviews</span>
        </div>
      </section>
      <section className="bg-black container max-w-7xl mx-auto">
        <div className="py-8 text-white">
          {dataToShow ? (
            <div>
              {dataToShow.length > 0 ? (
                dataToShow.map((item, idx) => (
                  <div key={idx}>
                    <p>Name: {item.name}</p>
                    <p>City: {item.city}</p>
                    <p>Rating: {item.rating}</p>
                    <p>Musics: {item.musics.join(", ")}</p>
                    <p>Days Opened: {item.daysOpened.join(", ")}</p>
                  </div>
                ))
              ) : (
                <p>No data found!</p>
              )}
            </div>
          ) : (
            <p>No data to show</p>
          )}
        </div>
      </section>
    </main>
  );
}
