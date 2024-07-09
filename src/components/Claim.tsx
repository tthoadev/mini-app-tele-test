function Claim() {
  return (
    <div className="pb-10 pt-4 w-full flex flex-col items-center justify-start">
      <p className="text-[18px] text-black font-semibold animate-showTop-1.3">
        Unlock 4 More Entries
      </p>
      <p className="mt-1 text-[14px] text-[#6b7280] animate-showTop-1.4">
        Complete the above entries to unlock the rest!
      </p>
      <button className="mt-4 w-[192px] h-[40px] rounded-lg px-5 py-2 text-white bg-[#9ca3af] animate-showTop-1.5">
        Claim
      </button>
    </div>
  );
}

export default Claim;
