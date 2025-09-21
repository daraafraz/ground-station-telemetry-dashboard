import svgPaths from "./svg-7qstyo787h";
import imgLogos1 from "../assets/d57eb00bb2dd33552a7e265032ac4831b54a0332.png";
import { imgAnimatedGridForLocalMap } from "./svg-86764";

function Bar1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Bar">
      <div aria-hidden="true" className="absolute border-[#2d2d2d] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Bar10() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Bar">
      <div aria-hidden="true" className="absolute border-[#2d2d2d] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BarRow() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 w-full" data-name="Bar Row">
      {[...Array(9).keys()].map((_, i) => (
        <Bar1 key={i} />
      ))}
      <Bar10 />
    </div>
  );
}

function DataGrid() {
  return (
    <div className="content-stretch flex flex-col h-[400px] items-center overflow-clip relative shrink-0 w-full" data-name="Data Grid">
      {[...Array(9).keys()].map((_, i) => (
        <BarRow key={i} />
      ))}
    </div>
  );
}

function GridWrapper() {
  return (
    <div className="absolute content-stretch flex flex-col h-[800px] items-start left-0 top-[-400px] w-[400px]" data-name="Grid Wrapper">
      {[...Array(2).keys()].map((_, i) => (
        <DataGrid key={i} />
      ))}
    </div>
  );
}

function AnimatedGridForLocalMap() {
  return (
    <div className="[grid-area:1_/_1] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[400px_400px] ml-0 mt-0 overflow-clip relative size-[400px]" data-name="Animated Grid for Local Map" style={{ maskImage: `url('${imgAnimatedGridForLocalMap}')` }}>
      <GridWrapper />
    </div>
  );
}

function RoadBoundary() {
  return <div className="absolute bg-[#2d2d2d] h-[400px] left-0 top-0 w-[10px]" data-name="Road Boundary" />;
}

function LocalMapMovingRoadBoundaries() {
  return (
    <div className="[grid-area:1_/_1] h-[400px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-258.5px_-0.126px] mask-size-[400px_400px] ml-[258.5px] mt-[0.126px] relative w-[40px]" data-name="Local Map, Moving Road Boundaries" style={{ maskImage: `url('${imgAnimatedGridForLocalMap}')` }}>
      <RoadBoundary />
    </div>
  );
}

function RoadBoundary1() {
  return <div className="absolute bg-[#2d2d2d] h-[400px] left-0 top-0 w-[10px]" data-name="Road Boundary" />;
}

function LocalMapMovingRoadBoundaries1() {
  return (
    <div className="[grid-area:1_/_1] h-[400px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-129.5px_-0.126px] mask-size-[400px_400px] ml-[129.5px] mt-[0.126px] relative w-[40px]" data-name="Local Map, Moving Road Boundaries" style={{ maskImage: `url('${imgAnimatedGridForLocalMap}')` }}>
      <RoadBoundary1 />
    </div>
  );
}

function Glow() {
  return <div className="absolute bg-[#707070] blur-[2px] filter h-[36px] opacity-25 rounded-[26px] translate-x-[-50%] translate-y-[-50%] w-[24px]" data-name="Glow" style={{ top: "calc(50% + 7px)", left: "calc(50% - 8px)" }} />;
}

function OponentCarRectangle() {
  return (
    <div className="bg-[#707070] h-[15px] relative rounded-[4px] w-[30px]" data-name="Oponent Car Rectangle">
      <div aria-hidden="true" className="absolute border-2 border-[#131517] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-[9px]">
      <Glow />
      <div className="absolute flex h-[30px] items-center justify-center left-[4px] top-[12px] w-[15px]">
        <div className="flex-none rotate-[270deg]">
          <OponentCarRectangle />
        </div>
      </div>
    </div>
  );
}

function LocalMapMovingCar3() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col items-center justify-center mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-202.5px_-236.75px] mask-size-[400px_400px] ml-[202.5px] mt-[236.75px] relative size-[40px]" data-name="Local Map Moving Car 3" style={{ maskImage: `url('${imgAnimatedGridForLocalMap}')` }}>
      <Group1 />
    </div>
  );
}

function Glow1() {
  return <div className="absolute bg-[#707070] blur-[2px] filter h-[36px] opacity-25 rounded-[26px] translate-x-[-50%] translate-y-[-50%] w-[24px]" data-name="Glow" style={{ top: "calc(50% - 2px)", left: "calc(50% - 8px)" }} />;
}

function OponentCarRectangle1() {
  return (
    <div className="bg-[#707070] h-[15px] relative rounded-[4px] w-[30px]" data-name="Oponent Car Rectangle">
      <div aria-hidden="true" className="absolute border-2 border-[#131517] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-0">
      <Glow1 />
      <div className="absolute flex h-[30px] items-center justify-center left-[4px] top-[3px] w-[15px]">
        <div className="flex-none rotate-[270deg]">
          <OponentCarRectangle1 />
        </div>
      </div>
    </div>
  );
}

function LocalMapMovingCar1() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col items-center justify-center mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-149.5px_-195.75px] mask-size-[400px_400px] ml-[149.5px] mt-[195.75px] relative size-[40px]" data-name="Local Map Moving Car 1" style={{ maskImage: `url('${imgAnimatedGridForLocalMap}')` }}>
      <Group2 />
    </div>
  );
}

function Glow2() {
  return <div className="absolute bg-[#707070] blur-[2px] filter h-[36px] opacity-25 rounded-[26px] translate-x-[-50%] translate-y-[-50%] w-[24px]" data-name="Glow" style={{ top: "calc(50% - 2px)", left: "calc(50% + 8px)" }} />;
}

function OponentCarRectangle2() {
  return (
    <div className="bg-[#707070] h-[15px] relative rounded-[4px] w-[30px]" data-name="Oponent Car Rectangle">
      <div aria-hidden="true" className="absolute border-2 border-[#131517] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[16px] top-0">
      <Glow2 />
      <div className="absolute flex h-[30px] items-center justify-center left-[20px] top-[3px] w-[15px]">
        <div className="flex-none rotate-[270deg]">
          <OponentCarRectangle2 />
        </div>
      </div>
    </div>
  );
}

function LocalMapMovingCar2() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col items-center justify-center mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-166.5px_-304.75px] mask-size-[400px_400px] ml-[166.5px] mt-[304.75px] relative size-[40px]" data-name="Local Map Moving Car 2" style={{ maskImage: `url('${imgAnimatedGridForLocalMap}')` }}>
      <Group3 />
    </div>
  );
}

function Glow3() {
  return <div className="absolute bg-[#e55937] blur-[2px] bottom-[-3px] filter h-[36px] left-1/2 opacity-25 rounded-[26px] translate-x-[-50%] w-[24px]" data-name="Glow" />;
}

function TargetGlow() {
  return <div className="absolute bg-[#e55937] blur-[2px] filter h-[9px] left-1/2 opacity-25 translate-x-[-50%] translate-y-[-50%] w-[21px]" data-name="Target Glow" style={{ top: "calc(50% - 0.38px)" }} />;
}

function TargetBar() {
  return (
    <div className="bg-[#e55937] h-[8px] relative rounded-[4px] shrink-0 w-[15px]" data-name="Target Bar">
      <div aria-hidden="true" className="absolute border-2 border-[#131517] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Target() {
  return (
    <div className="content-stretch flex items-start relative rounded-[4px] shrink-0" data-name="Target">
      <TargetGlow />
      <TargetBar />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#e55937] h-[15px] relative rounded-[4px] w-[30px]">
      <div aria-hidden="true" className="absolute border-2 border-[#131517] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Car() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col items-center justify-center mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-189.5px_-108.955px] mask-size-[400px_400px] ml-[189.5px] mt-[108.955px] relative rounded-[41px] w-[20px]" data-name="Car" style={{ maskImage: `url('${imgAnimatedGridForLocalMap}')` }}>
      <Glow3 />
      <Target />
      <div className="h-[67px] relative shrink-0 w-[0.256px]" data-name="Target Line">
        <div className="absolute inset-[-0.01%_-390.28%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 67">
            <path d="M1.25623 67L1 0" id="Target Line" stroke="var(--stroke-0, #E55937)" strokeDasharray="4 3" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="flex h-[30px] items-center justify-center relative shrink-0 w-[15px]">
        <div className="flex-none rotate-[270deg]">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function MapStuff() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative" data-name="Map Stuff" style={{ marginTop: "calc(50% - 200px)", marginLeft: "calc(50% - 200px)" }}>
      <div className="[grid-area:1_/_1] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.5px_-0.25px] mask-size-[400px_400px] ml-[0.5px] mt-[0.25px] size-[400px]" data-name="BG Shape" style={{ maskImage: `url('${imgAnimatedGridForLocalMap}')` }} />
      <AnimatedGridForLocalMap />
      <LocalMapMovingRoadBoundaries />
      <LocalMapMovingRoadBoundaries1 />
      <LocalMapMovingCar3 />
      <LocalMapMovingCar1 />
      <LocalMapMovingCar2 />
      <Car />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Mask group">
      <MapStuff />
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <MaskGroup />
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-center justify-center min-h-px min-w-px relative shrink-0">
      <MaskGroup1 />
    </div>
  );
}

function Text() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[23px] items-start pb-[20px] pt-0 px-0 relative shrink-0" data-name="Text">
      <div className="font-['IBM_Plex_Sans_Condensed:Medium',_sans-serif] leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[18px] text-nowrap tracking-[0.18px] uppercase w-[321px]">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Local Map</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[20px] top-[20px] w-[321px]">
      <Text />
    </div>
  );
}

function Map() {
  return (
    <div className="basis-0 bg-gradient-to-b from-[rgba(255,255,255,0.04)] grow h-[513.5px] min-h-px min-w-px relative rounded-[15px] shrink-0 to-[rgba(255,255,255,0.02)]" data-name="Map">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[513.5px] items-start p-[20px] relative w-full">
          <Frame2 />
          <Frame1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function Text1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[23px] items-start pb-[20px] pt-0 px-0 relative shrink-0 w-full" data-name="Text">
      <div className="basis-0 font-['IBM_Plex_Sans_Condensed:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[18px] text-nowrap tracking-[0.18px] uppercase">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Full-Track Map</p>
      </div>
    </div>
  );
}

function RoadPath() {
  return (
    <div className="absolute h-[236px] left-0 top-0 w-[400px]" data-name="Road Path">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 400 236">
        <g id="Road Path">
          <path d={svgPaths.p7413b00} id="Track Borders" stroke="var(--stroke-0, #EE6622)" strokeWidth="30" />
          <path d={svgPaths.p7413b00} id="Track BG" stroke="var(--stroke-0, #232323)" strokeWidth="30" />
          <path d={svgPaths.p3d8e7000} id="Outer Lines" stroke="var(--stroke-0, #131517)" strokeWidth="14" />
          <path d={svgPaths.p3d8e7000} id="Center Line" stroke="var(--stroke-0, #232323)" strokeWidth="11" />
        </g>
      </svg>
    </div>
  );
}

function InvisibleAlignmentBarHideThis() {
  return <div className="bg-[#707070] h-[30px] opacity-0 shrink-0 w-px" data-name="Invisible Alignment Bar — Hide This" />;
}

function CarCircleGlow() {
  return <div className="absolute bg-[#707070] blur-[2px] filter h-[26px] left-1/2 opacity-25 rounded-[53px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[24px]" data-name="Car Circle Glow" />;
}

function CarCircle() {
  return (
    <div className="bg-[#707070] relative rounded-[45px] size-[15px]" data-name="Car Circle">
      <div aria-hidden="true" className="absolute border-2 border-[#131517] border-solid inset-0 pointer-events-none rounded-[45px]" />
    </div>
  );
}

function Car1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[30px] items-center justify-center left-1/2 rounded-[41px] translate-x-[-50%] translate-y-[-50%] w-[20px]" data-name="Car" style={{ top: "calc(50% + 0.12px)" }}>
      <CarCircleGlow />
      <div className="flex h-[15px] items-center justify-center relative shrink-0 w-[15px]">
        <div className="flex-none rotate-[270deg]">
          <CarCircle />
        </div>
      </div>
    </div>
  );
}

function CarUs() {
  return (
    <div className="content-stretch flex h-[30px] items-center justify-center relative rounded-[87px] w-[8px]" data-name="Car, Us">
      <InvisibleAlignmentBarHideThis />
      <Car1 />
    </div>
  );
}

function MovingCarOnKentuckyPathThem3() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-between px-[110px] py-[4px] translate-x-[-50%] translate-y-[-50%] w-[400px]" data-name="Moving Car on Kentucky Path, Them3" style={{ top: "calc(50% - 7.045px)", left: "calc(50% + 1px)" }}>
      <RoadPath />
      <div className="absolute flex h-[30.707px] items-center justify-center left-[98.34px] top-[200.65px] w-[11.307px]">
        <div className="flex-none rotate-[6.455deg]">
          <CarUs />
        </div>
      </div>
    </div>
  );
}

function InvisibleAlignmentBarHideThis1() {
  return <div className="bg-white h-[30px] opacity-0 shrink-0 w-px" data-name="Invisible Alignment Bar — Hide This" />;
}

function CarCircleGlow1() {
  return <div className="absolute bg-[#707070] blur-[2px] filter h-[26px] left-1/2 opacity-25 rounded-[53px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[24px]" data-name="Car Circle Glow" />;
}

function CarCircle1() {
  return (
    <div className="bg-[#707070] relative rounded-[45px] size-[15px]" data-name="Car Circle">
      <div aria-hidden="true" className="absolute border-2 border-[#131517] border-solid inset-0 pointer-events-none rounded-[45px]" />
    </div>
  );
}

function Car2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[30px] items-center justify-center left-1/2 rounded-[41px] translate-x-[-50%] translate-y-[-50%] w-[20px]" data-name="Car" style={{ top: "calc(50% - 8px)" }}>
      <CarCircleGlow1 />
      <div className="flex h-[15px] items-center justify-center relative shrink-0 w-[15px]">
        <div className="flex-none rotate-[270deg]">
          <CarCircle1 />
        </div>
      </div>
    </div>
  );
}

function CarUs1() {
  return (
    <div className="content-stretch flex h-[30px] items-center justify-center opacity-90 relative rounded-[87px] w-[8px]" data-name="Car, Us">
      <InvisibleAlignmentBarHideThis1 />
      <Car2 />
    </div>
  );
}

function MovingCarOnKentuckyPathThem2() {
  return (
    <div className="absolute box-border content-stretch flex h-[236px] items-center justify-between px-[110px] py-[4px] translate-x-[-50%] translate-y-[-50%] w-[400px]" data-name="Moving Car on Kentucky Path, Them2" style={{ top: "calc(50% - 7.045px)", left: "calc(50% + 1px)" }}>
      <div className="absolute flex h-[30.707px] items-center justify-center left-[98.34px] top-[200.65px] w-[11.307px]">
        <div className="flex-none rotate-[6.455deg]">
          <CarUs1 />
        </div>
      </div>
    </div>
  );
}

function InvisibleAlignmentBarHideThis2() {
  return <div className="bg-white h-[30px] opacity-0 shrink-0 w-px" data-name="Invisible Alignment Bar — Hide This" />;
}

function CarCircleGlow2() {
  return <div className="absolute bg-[#707070] blur-[2px] filter h-[26px] left-1/2 opacity-25 rounded-[53px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[24px]" data-name="Car Circle Glow" />;
}

function CarCircle2() {
  return (
    <div className="bg-[#707070] relative rounded-[45px] size-[15px]" data-name="Car Circle">
      <div aria-hidden="true" className="absolute border-2 border-[#131517] border-solid inset-0 pointer-events-none rounded-[45px]" />
    </div>
  );
}

function Car3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[30px] items-center justify-center left-1/2 rounded-[41px] top-[8px] translate-x-[-50%] w-[20px]" data-name="Car">
      <CarCircleGlow2 />
      <div className="flex h-[15px] items-center justify-center relative shrink-0 w-[15px]">
        <div className="flex-none rotate-[270deg]">
          <CarCircle2 />
        </div>
      </div>
    </div>
  );
}

function CarUs2() {
  return (
    <div className="content-stretch flex h-[30px] items-center justify-center relative rounded-[87px] w-[8px]" data-name="Car, Us">
      <InvisibleAlignmentBarHideThis2 />
      <Car3 />
    </div>
  );
}

function MovingCarOnKentuckyPathThem() {
  return (
    <div className="absolute box-border content-stretch flex h-[236px] items-center justify-between px-[110px] py-[4px] translate-x-[-50%] translate-y-[-50%] w-[400px]" data-name="Moving Car on Kentucky Path, Them" style={{ top: "calc(50% - 7.045px)", left: "calc(50% + 1px)" }}>
      <div className="absolute flex h-[30.707px] items-center justify-center left-[98.34px] top-[200.65px] w-[11.307px]">
        <div className="flex-none rotate-[6.455deg]">
          <CarUs2 />
        </div>
      </div>
    </div>
  );
}

function InvisibleAlignmentBarHideThis3() {
  return <div className="bg-white h-[30px] opacity-0 shrink-0 w-px" data-name="Invisible Alignment Bar — Hide This" />;
}

function CarCircleGlow3() {
  return <div className="absolute bg-[#e55937] blur-[2px] filter h-[26px] left-1/2 opacity-25 rounded-[53px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[24px]" data-name="Car Circle Glow" />;
}

function CarCircle3() {
  return (
    <div className="bg-[#e55937] relative rounded-[45px] size-[15px]" data-name="Car Circle">
      <div aria-hidden="true" className="absolute border-2 border-[#131517] border-solid inset-0 pointer-events-none rounded-[45px]" />
    </div>
  );
}

function Car4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[30px] items-center justify-center left-1/2 rounded-[41px] translate-x-[-50%] translate-y-[-50%] w-[20px]" data-name="Car" style={{ top: "calc(50% + 0.12px)" }}>
      <CarCircleGlow3 />
      <div className="flex h-[15px] items-center justify-center relative shrink-0 w-[15px]">
        <div className="flex-none rotate-[270deg]">
          <CarCircle3 />
        </div>
      </div>
    </div>
  );
}

function CarUs3() {
  return (
    <div className="content-stretch flex h-[30px] items-center justify-center relative rounded-[87px] w-[8px]" data-name="Car, Us">
      <InvisibleAlignmentBarHideThis3 />
      <Car4 />
    </div>
  );
}

function MovingCarOnKentuckyPathUs() {
  return (
    <div className="box-border content-stretch flex h-[229px] items-center justify-between px-[110px] py-[4px] relative shrink-0 w-[397px]" data-name="Moving Car on Kentucky Path, Us">
      <div className="absolute flex h-[30.707px] items-center justify-center left-[98.34px] top-[200.65px] w-[11.307px]">
        <div className="flex-none rotate-[6.455deg]">
          <CarUs3 />
        </div>
      </div>
    </div>
  );
}

function TrackerWrapper() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[10px] grow items-center justify-center min-h-px min-w-px pb-[20px] pt-0 px-0 relative shrink-0 w-full" data-name="Tracker Wrapper">
      <MovingCarOnKentuckyPathThem3 />
      <MovingCarOnKentuckyPathThem2 />
      <MovingCarOnKentuckyPathThem />
      <MovingCarOnKentuckyPathUs />
    </div>
  );
}

function Toggle() {
  return (
    <div className="h-[20px] relative shrink-0 w-[40px]" data-name="Toggle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 20">
        <g id="Toggle">
          <rect height="19" rx="9.5" stroke="var(--stroke-0, #707070)" width="39" x="0.5" y="0.5" />
          <circle cx="10" cy="10" fill="var(--fill-0, white)" fillOpacity="0.5" id="ToggleNob" r="7" />
        </g>
      </svg>
    </div>
  );
}

function AtomBallLeft() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-[40px]" data-name="Atom-/ball left">
      <Toggle />
    </div>
  );
}

function MoleculesSelectionElement() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Molecules-/Selection Element">
      <AtomBallLeft />
      <div className="capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#707070] text-[16px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Racing Line</p>
      </div>
    </div>
  );
}

function Toggle1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Toggle">
      <MoleculesSelectionElement />
    </div>
  );
}

function Map1() {
  return (
    <div className="basis-0 bg-gradient-to-b from-[rgba(255,255,255,0.04)] grow h-full min-h-px min-w-px relative rounded-[15px] shrink-0 to-[rgba(255,255,255,0.02)]" data-name="Map">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[20px] relative size-full">
          <Text1 />
          <TrackerWrapper />
          <Toggle1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function MidThird() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start min-h-px min-w-px overflow-clip relative rounded-[15px] shrink-0 w-full" data-name="Mid-Third">
      <Map />
      <Map1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[24px] items-start pb-[20px] pt-0 px-0 relative shrink-0 w-full" data-name="Text">
      <div className="basis-0 font-['IBM_Plex_Sans_Condensed:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[18px] text-nowrap tracking-[0.18px] uppercase">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Control Heading Errors</p>
      </div>
    </div>
  );
}

function Bar198() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Bar">
      <div aria-hidden="true" className="absolute border-[#2d2d2d] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BarRow18() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 w-full" data-name="Bar Row">
      {[...Array(14).keys()].map((_, i) => (
        <Bar198 key={i} />
      ))}
    </div>
  );
}

function DataGrids() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-center relative shrink-0 w-[600px]" data-name="Data Grids">
      {[...Array(5).keys()].map((_, i) => (
        <BarRow18 key={i} />
      ))}
    </div>
  );
}

function DataGraph() {
  return (
    <div className="h-[69.415px] relative shrink-0 w-[600px]" data-name="Data Graph">
      <div className="absolute bottom-[-1.3%] left-0 right-[-0.01%] top-[-0.85%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 602 72">
          <g id="Data Graph">
            <path d={svgPaths.p1e9f9400} fill="var(--stroke-0, white)" id="Vector 1" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function DataGraphs() {
  return (
    <div className="absolute content-stretch flex items-center justify-end right-0 translate-y-[-50%]" data-name="Data Graphs" style={{ top: "calc(50% - 0.375px)" }}>
      {[...Array(3).keys()].map((_, i) => (
        <DataGraph key={i} />
      ))}
    </div>
  );
}

function DataGrids4() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Data Grids">
      {[...Array(4).keys()].map((_, i) => (
        <DataGrids key={i} />
      ))}
      <DataGraphs />
    </div>
  );
}

function MovingStripAnimated() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Moving Strip (Animated)">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative size-full">
        <DataGrids4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#2d2d2d] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Text">
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[24px] items-start pb-[20px] pt-[5px] px-0 relative w-full">
          <div className="basis-0 font-['IBM_Plex_Sans_Condensed:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[18px] text-nowrap tracking-[0.18px] uppercase">
            <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Lateral Errors</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bento13() {
  return (
    <div className="basis-0 bg-gradient-to-b from-[rgba(255,255,255,0.04)] grow min-h-px min-w-px relative rounded-[15px] shrink-0 to-[rgba(255,255,255,0.02)] w-full" data-name="Bento 1/3">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[20px] relative size-full">
          <Text2 />
          <MovingStripAnimated />
          <Text3 />
          <MovingStripAnimated />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function Bento14() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow h-full items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Bento 1/3">
      <Bento13 />
    </div>
  );
}

function Text4() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[24px] items-start pb-[20px] pt-0 px-0 relative shrink-0 w-full" data-name="Text">
      <div className="basis-0 font-['IBM_Plex_Sans_Condensed:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[18px] text-nowrap tracking-[0.18px] uppercase">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">GPS</p>
      </div>
    </div>
  );
}

function Bar758() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Bar">
      <div aria-hidden="true" className="absolute border-[#2d2d2d] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BarRow58() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 w-full" data-name="Bar Row">
      {[...Array(14).keys()].map((_, i) => (
        <Bar758 key={i} />
      ))}
    </div>
  );
}

function DataGrids10() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-center relative shrink-0 w-[600px]" data-name="Data Grids">
      {[...Array(5).keys()].map((_, i) => (
        <BarRow58 key={i} />
      ))}
    </div>
  );
}

function DataGraph6() {
  return (
    <div className="h-[69.415px] relative shrink-0 w-[600px]" data-name="Data Graph">
      <div className="absolute bottom-[-1.3%] left-0 right-[-0.01%] top-[-0.85%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 602 72">
          <g id="Data Graph">
            <path d={svgPaths.p1e9f9400} fill="var(--stroke-0, white)" id="Vector 1" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function DataGraphs2() {
  return (
    <div className="absolute content-stretch flex items-center justify-end right-0 translate-y-[-50%]" data-name="Data Graphs" style={{ top: "calc(50% - 0.375px)" }}>
      {[...Array(3).keys()].map((_, i) => (
        <DataGraph6 key={i} />
      ))}
    </div>
  );
}

function DataGrids14() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Data Grids">
      {[...Array(4).keys()].map((_, i) => (
        <DataGrids10 key={i} />
      ))}
      <DataGraphs2 />
    </div>
  );
}

function MovingStripAnimated2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Moving Strip (Animated)">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative size-full">
        <DataGrids14 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#2d2d2d] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Text">
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[24px] items-start pb-[20px] pt-[5px] px-0 relative w-full">
          <div className="basis-0 font-['IBM_Plex_Sans_Condensed:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[18px] text-nowrap tracking-[0.18px] uppercase">
            <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">RTK Diff age</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bento15() {
  return (
    <div className="basis-0 bg-gradient-to-b from-[rgba(255,255,255,0.04)] grow min-h-px min-w-px relative rounded-[15px] shrink-0 to-[rgba(255,255,255,0.02)] w-full" data-name="Bento 1/3">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[20px] relative size-full">
          <Text4 />
          <MovingStripAnimated2 />
          <Text5 />
          <MovingStripAnimated2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function Bento16() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow h-full items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Bento 1/3">
      <Bento15 />
    </div>
  );
}

function Text6() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[24px] items-start pb-[20px] pt-0 px-0 relative shrink-0 w-full" data-name="Text">
      <div className="basis-0 font-['IBM_Plex_Sans_Condensed:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[18px] text-nowrap tracking-[0.18px] uppercase">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">steering</p>
      </div>
    </div>
  );
}

function Bar1318() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Bar">
      <div aria-hidden="true" className="absolute border-[#2d2d2d] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BarRow98() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 w-full" data-name="Bar Row">
      {[...Array(14).keys()].map((_, i) => (
        <Bar1318 key={i} />
      ))}
    </div>
  );
}

function DataGrids20() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-center relative shrink-0 w-[600px]" data-name="Data Grids">
      {[...Array(5).keys()].map((_, i) => (
        <BarRow98 key={i} />
      ))}
    </div>
  );
}

function DataGraph12() {
  return (
    <div className="h-[69.415px] relative shrink-0 w-[600px]" data-name="Data Graph">
      <div className="absolute bottom-[-1.3%] left-0 right-[-0.01%] top-[-0.85%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 602 72">
          <g id="Data Graph">
            <path d={svgPaths.p1e9f9400} fill="var(--stroke-0, white)" id="Vector 1" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function DataGraphs4() {
  return (
    <div className="absolute content-stretch flex items-center justify-end right-0 translate-y-[-50%]" data-name="Data Graphs" style={{ top: "calc(50% - 0.083px)" }}>
      {[...Array(3).keys()].map((_, i) => (
        <DataGraph12 key={i} />
      ))}
    </div>
  );
}

function DataGrids24() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Data Grids">
      {[...Array(4).keys()].map((_, i) => (
        <DataGrids20 key={i} />
      ))}
      <DataGraphs4 />
    </div>
  );
}

function MovingStripAnimated4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Moving Strip (Animated)">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative size-full">
        <DataGrids24 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#2d2d2d] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Text">
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[24px] items-start pb-[20px] pt-[5px] px-0 relative w-full">
          <div className="basis-0 font-['IBM_Plex_Sans_Condensed:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[18px] text-nowrap tracking-[0.18px] uppercase">
            <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">throttle</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Text">
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[24px] items-start pb-[20px] pt-[5px] px-0 relative w-full">
          <div className="basis-0 font-['IBM_Plex_Sans_Condensed:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[18px] text-nowrap tracking-[0.18px] uppercase">
            <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">brake</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bento17() {
  return (
    <div className="basis-0 bg-gradient-to-b from-[rgba(255,255,255,0.04)] grow min-h-px min-w-px relative rounded-[15px] shrink-0 to-[rgba(255,255,255,0.02)] w-full" data-name="Bento 1/3">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[20px] relative size-full">
          <Text6 />
          <MovingStripAnimated4 />
          <Text7 />
          <MovingStripAnimated4 />
          <Text8 />
          <MovingStripAnimated4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function Bento18() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow h-full items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Bento 1/3">
      <Bento17 />
    </div>
  );
}

function BottomHalf() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="Bottom-Half">
      <Bento14 />
      <Bento16 />
      <Bento18 />
    </div>
  );
}

function Main() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow h-full items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Main">
      <MidThird />
      <BottomHalf />
    </div>
  );
}

function Text9() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[24px] items-start pb-[20px] pt-0 px-0 relative shrink-0 w-[668px]" data-name="Text">
      <div className="basis-0 font-['IBM_Plex_Sans_Condensed:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[18px] text-nowrap tracking-[0.18px] uppercase">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Planner</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">actual speed</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center relative shrink-0">
      <div className="capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-right text-white">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">0.00 mph</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0 w-full" data-name="Text">
      <Frame3 />
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">desired speed</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center relative shrink-0">
      <div className="capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap text-right">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">0.00 mph</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0 w-full" data-name="Text">
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function TextBox() {
  return (
    <div className="h-full relative rounded-[2px] shrink-0 w-[100px]" data-name="Text Box">
      <div className="box-border content-stretch flex gap-[10px] h-full items-center overflow-clip pl-[8px] pr-[4px] py-[5px] relative w-[100px]">
        <div className="capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] h-full justify-center leading-[0] not-italic relative shrink-0 text-[#707070] text-[12px] w-[80px]">
          <p className="leading-[normal]">Speed Input</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function AcceptE8Fb() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Accept - E8FB - ">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Accept - E8FB - î£»">
          <path d={svgPaths.p5489700} fill="var(--fill-0, #707070)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="Icon">
      <AcceptE8Fb />
    </div>
  );
}

function Button() {
  return (
    <div className="h-full relative rounded-[2px] shrink-0" data-name="Button">
      <div className="box-border content-stretch flex gap-[10px] h-full items-center justify-center overflow-clip px-[6px] py-[11px] relative">
        <Icon />
      </div>
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function InputTextButton() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[35px] items-end justify-end px-0 py-[5px] relative shrink-0 w-full" data-name="Input, Text+Button">
      <TextBox />
      <Button />
    </div>
  );
}

function Component() {
  return <div className="bg-[rgba(255,255,255,0.1)] h-px shrink-0 w-full" data-name="—" />;
}

function Divider() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-0 py-px relative shrink-0 w-full" data-name="Divider">
      <Component />
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">battery level</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center relative shrink-0">
      <div className="capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-right text-white">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">13</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex gap-[10px] h-[23px] items-center relative shrink-0 w-full" data-name="Text">
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">cT state</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center relative shrink-0">
      <div className="capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-right text-white">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">Ignition</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex gap-[10px] h-[23px] items-center relative shrink-0 w-full" data-name="Text">
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">system state</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center relative shrink-0">
      <div className="capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-right text-white">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">Stand-by</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex gap-[10px] h-[23px] items-center relative shrink-0 w-full" data-name="Text">
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function LeftColumn() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Left-Column">
      <Text10 />
      <Text11 />
      <InputTextButton />
      <Divider />
      <Text12 />
      <Divider />
      <Text13 />
      <Text14 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">engine temp</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center relative shrink-0">
      <div className="capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-right text-white">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">2.6</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex gap-[10px] h-[23px] items-center relative shrink-0 w-full" data-name="Text">
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">RPM</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center relative shrink-0">
      <div className="capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-right text-white">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">7500</p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex gap-[10px] h-[23px] items-center relative shrink-0 w-full" data-name="Text">
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">gear</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center relative shrink-0">
      <div className="capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-right text-white">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex gap-[10px] h-[23px] items-center relative shrink-0 w-full" data-name="Text">
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">oil pressure</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center relative shrink-0">
      <div className="capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-right text-white">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">0.00000</p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="content-stretch flex gap-[10px] h-[23px] items-center relative shrink-0 w-full" data-name="Text">
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Fuel pressure</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center relative shrink-0">
      <div className="capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-right text-white">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">0.00000</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="content-stretch flex gap-[10px] h-[23px] items-center relative shrink-0 w-full" data-name="Text">
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function Component2() {
  return <div className="bg-[rgba(255,255,255,0.1)] h-px shrink-0 w-full" data-name="—" />;
}

function Divider2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-0 py-px relative shrink-0 w-full" data-name="Divider">
      <Component2 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Track Max Speed</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center relative shrink-0">
      <div className="capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-right text-white">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">80m</p>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="content-stretch flex gap-[10px] h-[23px] items-center relative shrink-0 w-full" data-name="Text">
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function RightColumn() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Right-Column">
      <Text15 />
      <Text16 />
      <Text17 />
      <Text18 />
      <Text19 />
      <Divider2 />
      <Text20 />
    </div>
  );
}

function TopSection() {
  return (
    <div className="content-start flex flex-wrap gap-[20px] items-start relative shrink-0 w-full" data-name="Top Section">
      <Text9 />
      <LeftColumn />
      <RightColumn />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[639px]" data-name="Left">
      {[...Array(2).keys()].map((_, i) => (
        <TopSection key={i} />
      ))}
    </div>
  );
}

function Component6() {
  return <div className="bg-[rgba(255,255,255,0.1)] h-px shrink-0 w-full" data-name="—" />;
}

function Divider6() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[35px] items-center justify-center overflow-clip px-0 py-[10px] relative shrink-0 w-[742px]" data-name="Divider">
      <Component6 />
    </div>
  );
}

function Text29() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[24px] items-start pb-[20px] pt-0 px-0 relative shrink-0 w-[742px]" data-name="Text">
      <div className="basis-0 font-['IBM_Plex_Sans_Condensed:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[18px] text-nowrap tracking-[0.18px] uppercase">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Planning Status</p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Debug value 1</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center relative shrink-0">
      <div className="capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-right text-white">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0 w-full z-[8]" data-name="Text">
      <Frame35 />
      <Frame36 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Debug Value 2</p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center relative shrink-0">
      <div className="capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap text-right">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0 w-full z-[7]" data-name="Text">
      <Frame37 />
      <Frame38 />
    </div>
  );
}

function Component7() {
  return <div className="bg-[rgba(255,255,255,0.1)] h-px shrink-0 w-full" data-name="—" />;
}

function Divider7() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-0 py-[5px] relative shrink-0 w-full z-[6]" data-name="Divider">
      <Component7 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Current Lane</p>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center relative shrink-0">
      <div className="capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-right text-white">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">-1</p>
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="content-stretch flex gap-[10px] h-[23px] items-center relative shrink-0 w-full z-[5]" data-name="Text">
      <Frame39 />
      <Frame40 />
    </div>
  );
}

function CaretDownSolid8Eddc() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="CaretDownSolid8 - EDDC - ">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="CaretDownSolid8 - EDDC - î·">
          <path d="M0 2.5H10L5 7.5L0 2.5Z" fill="var(--fill-0, #707070)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip px-0 py-[5px] relative shrink-0" data-name="Icon">
      <CaretDownSolid8Eddc />
    </div>
  );
}

function DropdownButtonCaptionForHover() {
  return (
    <div className="relative shrink-0 w-full" data-name="Dropdown Button Caption (For Hover)">
      <div className="flex flex-row items-center justify-end overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-end pl-[10px] pr-0 py-[4px] relative w-full">
          <div className="capitalize font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#707070] text-[16px] text-nowrap">
            <p className="leading-[normal] whitespace-pre">Inside</p>
          </div>
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function DropdownButtonsForClicks() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-end overflow-clip relative shrink-0 w-[107px]" data-name="Dropdown Buttons (For Clicks)">
      <DropdownButtonCaptionForHover />
    </div>
  );
}

function Frame41() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Goal Lane</p>
      </div>
      <DropdownButtonsForClicks />
    </div>
  );
}

function Text33() {
  return (
    <div className="content-stretch flex gap-[10px] h-[29px] items-center relative shrink-0 w-full z-[4]" data-name="Text">
      <Frame41 />
    </div>
  );
}

function Component8() {
  return <div className="bg-[rgba(255,255,255,0.1)] h-px shrink-0 w-full" data-name="—" />;
}

function Divider8() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-0 py-[5px] relative shrink-0 w-full z-[3]" data-name="Divider">
      <Component8 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Look-Ahead-Distance</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center relative shrink-0">
      <div className="capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-right text-white">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">4.000000</p>
      </div>
    </div>
  );
}

function Text34() {
  return (
    <div className="content-stretch flex gap-[10px] h-[23px] items-center relative shrink-0 w-full z-[2]" data-name="Text">
      <Frame42 />
      <Frame43 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">object distance</p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center relative shrink-0">
      <div className="capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap text-right">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">0.000000</p>
      </div>
    </div>
  );
}

function Text35() {
  return (
    <div className="content-stretch flex gap-[10px] h-[23px] items-center relative shrink-0 w-full z-[1]" data-name="Text">
      <Frame44 />
      <Frame45 />
    </div>
  );
}

function LeftColumn2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow h-[182px] isolate items-start min-h-px min-w-px relative shrink-0" data-name="Left-Column">
      <Text30 />
      <Text31 />
      <Divider7 />
      <Text32 />
      <Text33 />
      <Divider8 />
      <Text34 />
      <Text35 />
    </div>
  );
}

function BottomSection() {
  return (
    <div className="basis-0 content-start flex flex-wrap gap-[20px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Bottom Section">
      <Text29 />
      {[...Array(2).keys()].map((_, i) => (
        <LeftColumn2 key={i} />
      ))}
    </div>
  );
}

function Bento1() {
  return (
    <div className="basis-0 bg-gradient-to-b from-[rgba(255,255,255,0.04)] grow h-full min-h-px min-w-px relative rounded-[15px] shrink-0 to-[rgba(255,255,255,0.02)]" data-name="Bento">
      <div aria-hidden="true" className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="relative size-full">
        <div className="box-border content-start flex flex-wrap gap-[20px] items-start p-[20px] relative size-full">
          {[...Array(2).keys()].map((_, i) => (
            <Left key={i} />
          ))}
          <Divider6 />
          <BottomSection />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Frame">
      <Bento1 />
    </div>
  );
}

function Text41() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[24px] items-start pb-[20px] pt-0 px-0 relative shrink-0 w-full" data-name="Text">
      <div className="basis-0 font-['IBM_Plex_Sans_Condensed:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[18px] text-nowrap tracking-[0.18px] uppercase">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Safety Monitor</p>
      </div>
    </div>
  );
}

function Toggle2() {
  return (
    <div className="opacity-0 relative rounded-[43px] shrink-0 size-[12px]" data-name="Toggle">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[43px]" />
    </div>
  );
}

function Frame51() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Cisco Stop</p>
      </div>
      <Toggle2 />
    </div>
  );
}

function Text42() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0 w-full" data-name="Text">
      <Frame51 />
    </div>
  );
}

function Component13() {
  return <div className="bg-[rgba(255,255,255,0.1)] h-px shrink-0 w-full" data-name="—" />;
}

function Divider13() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-0 py-px relative shrink-0 w-full" data-name="Divider">
      <Component13 />
    </div>
  );
}

function Toggle3() {
  return (
    <div className="opacity-0 relative rounded-[43px] shrink-0 size-[12px]" data-name="Toggle">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[43px]" />
    </div>
  );
}

function Frame52() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">MyLaps Stop</p>
      </div>
      <Toggle3 />
    </div>
  );
}

function Text43() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0 w-full" data-name="Text">
      <Frame52 />
    </div>
  );
}

function Toggle4() {
  return (
    <div className="opacity-0 relative rounded-[43px] shrink-0 size-[12px]" data-name="Toggle">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[43px]" />
    </div>
  );
}

function Frame53() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Flag Stop</p>
      </div>
      <Toggle4 />
    </div>
  );
}

function Text44() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0 w-full" data-name="Text">
      <Frame53 />
    </div>
  );
}

function Toggle5() {
  return (
    <div className="opacity-0 relative rounded-[43px] shrink-0 size-[12px]" data-name="Toggle">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[43px]" />
    </div>
  );
}

function Frame54() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">No-Path Stop</p>
      </div>
      <Toggle5 />
    </div>
  );
}

function Text45() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0 w-full" data-name="Text">
      <Frame54 />
    </div>
  );
}

function Toggle6() {
  return (
    <div className="opacity-0 relative rounded-[43px] shrink-0 size-[12px]" data-name="Toggle">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[43px]" />
    </div>
  );
}

function Frame55() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Lateral Error Stop</p>
      </div>
      <Toggle6 />
    </div>
  );
}

function Text46() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0 w-full" data-name="Text">
      <Frame55 />
    </div>
  );
}

function Toggle7() {
  return (
    <div className="opacity-0 relative rounded-[43px] shrink-0 size-[12px]" data-name="Toggle">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[43px]" />
    </div>
  );
}

function Frame56() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Path Gap Stop</p>
      </div>
      <Toggle7 />
    </div>
  );
}

function Text47() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0 w-full" data-name="Text">
      <Frame56 />
    </div>
  );
}

function Toggle8() {
  return (
    <div className="opacity-0 relative rounded-[43px] shrink-0 size-[12px]" data-name="Toggle">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[43px]" />
    </div>
  );
}

function Frame57() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Planner Calc Stop</p>
      </div>
      <Toggle8 />
    </div>
  );
}

function Text48() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0 w-full" data-name="Text">
      <Frame57 />
    </div>
  );
}

function LeftColumn3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[221px]" data-name="Left-Column">
      <Text42 />
      <Divider13 />
      <Text43 />
      <Divider13 />
      <Text44 />
      <Divider13 />
      <Text45 />
      <Divider13 />
      <Text46 />
      <Divider13 />
      <Text47 />
      <Divider13 />
      <Text48 />
    </div>
  );
}

function Toggle9() {
  return (
    <div className="opacity-0 relative rounded-[43px] shrink-0 size-[12px]" data-name="Toggle">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[43px]" />
    </div>
  );
}

function Frame58() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Planner Timeout Stop</p>
      </div>
      <Toggle9 />
    </div>
  );
}

function Text49() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0 w-full" data-name="Text">
      <Frame58 />
    </div>
  );
}

function Component19() {
  return <div className="bg-[rgba(255,255,255,0.1)] h-px shrink-0 w-full" data-name="—" />;
}

function Divider19() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-0 py-px relative shrink-0 w-full" data-name="Divider">
      <Component19 />
    </div>
  );
}

function Toggle10() {
  return (
    <div className="opacity-0 relative rounded-[43px] shrink-0 size-[12px]" data-name="Toggle">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[43px]" />
    </div>
  );
}

function Frame59() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Lateral Control Stop</p>
      </div>
      <Toggle10 />
    </div>
  );
}

function Text50() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0 w-full" data-name="Text">
      <Frame59 />
    </div>
  );
}

function Toggle11() {
  return (
    <div className="opacity-0 relative rounded-[43px] shrink-0 size-[12px]" data-name="Toggle">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[43px]" />
    </div>
  );
}

function Frame60() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Localization Timeout Stop</p>
      </div>
      <Toggle11 />
    </div>
  );
}

function Text51() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0 w-full" data-name="Text">
      <Frame60 />
    </div>
  );
}

function Toggle12() {
  return (
    <div className="opacity-0 relative rounded-[43px] shrink-0 size-[12px]" data-name="Toggle">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[43px]" />
    </div>
  );
}

function Frame61() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Localization Quality Stop</p>
      </div>
      <Toggle12 />
    </div>
  );
}

function Text52() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0 w-full" data-name="Text">
      <Frame61 />
    </div>
  );
}

function Toggle13() {
  return (
    <div className="opacity-0 relative rounded-[43px] shrink-0 size-[12px]" data-name="Toggle">
      <div aria-hidden="true" className="absolute border-2 border-[#707070] border-solid inset-0 pointer-events-none rounded-[43px]" />
    </div>
  );
}

function Frame62() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Object Stop</p>
      </div>
      <Toggle13 />
    </div>
  );
}

function Text53() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0 w-full" data-name="Text">
      <Frame62 />
    </div>
  );
}

function Toggle14() {
  return (
    <div className="opacity-0 relative rounded-[43px] shrink-0 size-[12px]" data-name="Toggle">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[43px]" />
    </div>
  );
}

function Frame63() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Long Control Timeout Stop</p>
      </div>
      <Toggle14 />
    </div>
  );
}

function Text54() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0 w-full" data-name="Text">
      <Frame63 />
    </div>
  );
}

function Toggle15() {
  return (
    <div className="opacity-0 relative rounded-[43px] shrink-0 size-[12px]" data-name="Toggle">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[43px]" />
    </div>
  );
}

function Frame64() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Human Stop</p>
      </div>
      <Toggle15 />
    </div>
  );
}

function Text55() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0 w-full" data-name="Text">
      <Frame64 />
    </div>
  );
}

function RightColumn3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[270px]" data-name="Right-Column">
      <Text49 />
      <Divider19 />
      <Text50 />
      <Divider19 />
      <Text51 />
      <Divider19 />
      <Text52 />
      <Divider19 />
      <Text53 />
      <Divider19 />
      <Text54 />
      <Divider19 />
      <Text55 />
    </div>
  );
}

function Toggle16() {
  return (
    <div className="opacity-0 relative rounded-[43px] shrink-0 size-[12px]" data-name="Toggle">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[43px]" />
    </div>
  );
}

function Frame65() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Raptor Stop</p>
      </div>
      <Toggle16 />
    </div>
  );
}

function Text56() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0 w-full" data-name="Text">
      <Frame65 />
    </div>
  );
}

function Component25() {
  return <div className="bg-[rgba(255,255,255,0.1)] h-px shrink-0 w-full" data-name="—" />;
}

function Divider25() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-0 py-px relative shrink-0 w-full" data-name="Divider">
      <Component25 />
    </div>
  );
}

function Toggle17() {
  return (
    <div className="opacity-0 relative rounded-[43px] shrink-0 size-[12px]" data-name="Toggle">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[43px]" />
    </div>
  );
}

function Frame66() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Diagnostic Error</p>
      </div>
      <Toggle17 />
    </div>
  );
}

function Text57() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0 w-full" data-name="Text">
      <Frame66 />
    </div>
  );
}

function Toggle18() {
  return (
    <div className="bg-[#e55937] content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip relative rounded-[43px] shrink-0 size-[15px]" data-name="Toggle">
      <div className="flex flex-col font-['DIN_Next_LT_Pro:Heavy',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#131517] text-[12px] text-center uppercase w-full">
        <p className="leading-[normal]">!</p>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#e55937] text-[16px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Soft Stop</p>
      </div>
      <Toggle18 />
    </div>
  );
}

function Text58() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0 w-full" data-name="Text">
      <Frame67 />
    </div>
  );
}

function Toggle19() {
  return (
    <div className="opacity-0 relative rounded-[43px] shrink-0 size-[12px]" data-name="Toggle">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[43px]" />
    </div>
  );
}

function Frame68() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Hard Stop</p>
      </div>
      <Toggle19 />
    </div>
  );
}

function Text59() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0 w-full" data-name="Text">
      <Frame68 />
    </div>
  );
}

function Toggle20() {
  return (
    <div className="opacity-0 relative rounded-[43px] shrink-0 size-[12px]" data-name="Toggle">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[43px]" />
    </div>
  );
}

function Frame69() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Front Lidar Status</p>
      </div>
      <Toggle20 />
    </div>
  );
}

function Text60() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0 w-full" data-name="Text">
      <Frame69 />
    </div>
  );
}

function Toggle21() {
  return (
    <div className="opacity-0 relative rounded-[43px] shrink-0 size-[12px]" data-name="Toggle">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[43px]" />
    </div>
  );
}

function Frame70() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Left Lidar Status</p>
      </div>
      <Toggle21 />
    </div>
  );
}

function Text61() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0 w-full" data-name="Text">
      <Frame70 />
    </div>
  );
}

function Toggle22() {
  return (
    <div className="opacity-0 relative rounded-[43px] shrink-0 size-[12px]" data-name="Toggle">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[43px]" />
    </div>
  );
}

function Frame71() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-full items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Right Lidar Status</p>
      </div>
      <Toggle22 />
    </div>
  );
}

function Text62() {
  return (
    <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0 w-full" data-name="Text">
      <Frame71 />
    </div>
  );
}

function RightColumn4() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[196px]" data-name="Right-Column">
      <Text56 />
      <Divider25 />
      <Text57 />
      <Divider25 />
      <Text58 />
      <Divider25 />
      <Text59 />
      <Divider25 />
      <Text60 />
      <Divider25 />
      <Text61 />
      <Divider25 />
      <Text62 />
    </div>
  );
}

function BottomSection1() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Bottom Section">
      <LeftColumn3 />
      <RightColumn3 />
      <RightColumn4 />
    </div>
  );
}

function BnetoFillFill() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.04)] relative rounded-[15px] shrink-0 to-[rgba(255,255,255,0.02)] w-[782px]" data-name="Bneto Fill-Fill">
      <div className="box-border content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[20px] relative w-[782px]">
        <Text41 />
        <BottomSection1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function BottomThird() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Bottom Third">
      <BnetoFillFill />
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[2px] shrink-0" data-name="Button">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[12px] py-[10px] relative">
        <div className="capitalize font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#707070] text-[16px] text-nowrap">
          <p className="leading-[normal] whitespace-pre">Engine Start</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[2px] shrink-0" data-name="Button">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[12px] py-[10px] relative">
        <div className="capitalize font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
          <p className="leading-[normal] whitespace-pre">Engine Stop</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function LeftColumn4() {
  return (
    <div className="basis-0 content-start flex flex-wrap gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Left-Column">
      <Button1 />
      <Button2 />
    </div>
  );
}

function BottomSection2() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Bottom Section">
      {[...Array(2).keys()].map((_, i) => (
        <LeftColumn4 key={i} />
      ))}
    </div>
  );
}

function BnetoFillFill1() {
  return (
    <div className="basis-0 bg-gradient-to-b from-[rgba(255,255,255,0.04)] grow min-h-px min-w-px relative rounded-[15px] shrink-0 to-[rgba(255,255,255,0.02)]" data-name="Bneto Fill-Fill">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[20px] relative w-full">
          <BottomSection2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function MidThird1() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative rounded-[7px] shrink-0 w-full" data-name="Mid-Third">
      <BnetoFillFill1 />
    </div>
  );
}

function SideUseThisForResize() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-full items-start relative shrink-0 w-[782px]" data-name="Side (Use this for resize)">
      <Frame />
      <BottomThird />
      <MidThird1 />
    </div>
  );
}

function Article() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[21px] shrink-0" data-name="Article">
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start pb-[10px] pl-0 pr-[10px] pt-[35px] relative size-full">
          <Main />
          <SideUseThisForResize />
          <div className="absolute flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] justify-center leading-[0] left-[53px] not-italic text-[20px] text-nowrap text-white top-[9px] translate-y-[-50%]">
            <p className="leading-[normal] whitespace-pre">Kentucky Speedway</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component31() {
  return <div className="bg-white h-[2px] shrink-0 w-full" data-name="—" />;
}

function BurgerIcon() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[4px] items-center justify-center left-[9px] p-[10px] rounded-[37px] size-[36px] top-[16px]" data-name="Burger Icon">
      {[...Array(3).keys()].map((_, i) => (
        <Component31 key={i} />
      ))}
    </div>
  );
}

export default function Iteration3DefaultView() {
  return (
    <div className="bg-[#18181a] relative size-full" data-name="Iteration 3, Default View">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center pb-[10px] pt-[25px] px-[10px] relative size-full">
          <Article />
          <div className="absolute bg-center bg-cover bg-no-repeat h-[24px] right-[20px] top-[17px] w-[445px]" data-name="Logos 1" style={{ backgroundImage: `url('${imgLogos1}')` }} />
          <BurgerIcon />
        </div>
      </div>
    </div>
  );
}