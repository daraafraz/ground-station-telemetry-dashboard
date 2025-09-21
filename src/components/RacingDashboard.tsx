import svgPaths from "../imports/svg-7qstyo787h";
import { imgAnimatedGridForLocalMap } from "../imports/svg-86764";

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
      {Array.from({length: 9}, (_, i) => i).map((_, i) => (
        <Bar1 key={i} />
      ))}
      <Bar10 />
    </div>
  );
}

function DataGrid() {
  return (
    <div className="content-stretch flex flex-col h-[400px] items-center overflow-clip relative shrink-0 w-full" data-name="Data Grid">
      {Array.from({length: 9}, (_, i) => i).map((_, i) => (
        <BarRow key={i} />
      ))}
    </div>
  );
}

function GridWrapper() {
  return (
    <div className="absolute content-stretch flex flex-col h-[800px] items-start left-0 top-[-400px] w-[400px]" data-name="Grid Wrapper">
      {Array.from({length: 2}, (_, i) => i).map((_, i) => (
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

// Additional components for the full track map and racing line

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

function CarUs() {
  return (
    <div className="content-stretch flex h-[30px] items-center justify-center relative rounded-[87px] w-[8px]" data-name="Car, Us">
      <div className="bg-[#707070] h-[30px] opacity-0 shrink-0 w-px" data-name="Invisible Alignment Bar" />
      <div className="absolute content-stretch flex flex-col h-[30px] items-center justify-center left-1/2 rounded-[41px] translate-x-[-50%] translate-y-[-50%] w-[20px]" data-name="Car" style={{ top: "calc(50% + 0.12px)" }}>
        <div className="absolute bg-[#707070] blur-[2px] filter h-[26px] left-1/2 opacity-25 rounded-[53px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[24px]" data-name="Car Circle Glow" />
        <div className="flex h-[15px] items-center justify-center relative shrink-0 w-[15px]">
          <div className="flex-none rotate-[270deg]">
            <div className="bg-[#707070] relative rounded-[45px] size-[15px]" data-name="Car Circle">
              <div aria-hidden="true" className="absolute border-2 border-[#131517] border-solid inset-0 pointer-events-none rounded-[45px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlayerCar() {
  return (
    <div className="content-stretch flex h-[30px] items-center justify-center relative rounded-[87px] w-[8px]" data-name="Car, Us">
      <div className="bg-white h-[30px] opacity-0 shrink-0 w-px" data-name="Invisible Alignment Bar" />
      <div className="absolute content-stretch flex flex-col h-[30px] items-center justify-center left-1/2 rounded-[41px] translate-x-[-50%] translate-y-[-50%] w-[20px]" data-name="Car" style={{ top: "calc(50% + 0.12px)" }}>
        <div className="absolute bg-[#e55937] blur-[2px] filter h-[26px] left-1/2 opacity-25 rounded-[53px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[24px]" data-name="Car Circle Glow" />
        <div className="flex h-[15px] items-center justify-center relative shrink-0 w-[15px]">
          <div className="flex-none rotate-[270deg]">
            <div className="bg-[#e55937] relative rounded-[45px] size-[15px]" data-name="Car Circle">
              <div aria-hidden="true" className="absolute border-2 border-[#131517] border-solid inset-0 pointer-events-none rounded-[45px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MovingCarOnTrack({ position = 0, isPlayer = false }: { position?: number; isPlayer?: boolean }) {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-center px-[110px] py-[4px] translate-x-[-50%] translate-y-[-50%] w-[400px]" style={{ top: `calc(50% - ${7.045 + position * 5}px)`, left: "calc(50% - 20px)" }}>
      {position === 0 && <RoadPath />}
      <div className="absolute flex h-[30.707px] items-center justify-center left-[98.34px] top-[200.65px] w-[11.307px]">
        <div className="flex-none rotate-[6.455deg]">
          {isPlayer ? <PlayerCar /> : <CarUs />}
        </div>
      </div>
    </div>
  );
}

function TrackerWrapper() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[10px] grow items-center justify-center min-h-px min-w-px pb-[20px] pt-0 px-0 relative shrink-0 w-full" data-name="Tracker Wrapper">
      <div className="relative w-full h-full flex items-center justify-center">
        <MovingCarOnTrack position={1} />
        <MovingCarOnTrack position={2} />
        <MovingCarOnTrack position={3} />
        <MovingCarOnTrack position={0} isPlayer={true} />
      </div>
    </div>
  );
}

function RacingLineToggle() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Racing Line Toggle">
      <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-[40px]">
        <div className="h-[20px] relative shrink-0 w-[40px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 20">
            <g id="Toggle">
              <rect height="19" rx="9.5" stroke="var(--stroke-0, #707070)" width="39" x="0.5" y="0.5" />
              <circle cx="10" cy="10" fill="var(--fill-0, white)" fillOpacity="0.5" r="7" />
            </g>
          </svg>
        </div>
      </div>
      <div className="capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#707070] text-[16px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Racing Line</p>
      </div>
    </div>
  );
}

function FullTrackMap() {
  return (
    <div className="basis-0 bg-gradient-to-b from-[rgba(255,255,255,0.04)] grow h-full min-h-px min-w-px relative rounded-[15px] shrink-0 to-[rgba(255,255,255,0.02)]" data-name="Map">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[20px] relative size-full">
          <div className="box-border content-stretch flex gap-[10px] h-[23px] items-start pb-[20px] pt-0 px-0 relative shrink-0 w-full" data-name="Text">
            <div className="basis-0 font-['IBM_Plex_Sans_Condensed:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[18px] text-nowrap tracking-[0.18px] uppercase">
              <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Full-Track Map</p>
            </div>
          </div>
          <TrackerWrapper />
          <div className="content-stretch flex items-start relative shrink-0">
            <RacingLineToggle />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function DataVisualization({ title }: { title: string }) {
  return (
    <div className="basis-0 bg-gradient-to-b from-[rgba(255,255,255,0.04)] grow min-h-px min-w-px relative rounded-[15px] shrink-0 to-[rgba(255,255,255,0.02)] w-full">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[20px] relative size-full">
          <div className="box-border content-stretch flex gap-[10px] h-[24px] items-start pb-[20px] pt-0 px-0 relative shrink-0 w-full">
            <div className="basis-0 font-['IBM_Plex_Sans_Condensed:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[18px] text-nowrap tracking-[0.18px] uppercase">
              <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">{title}</p>
            </div>
          </div>
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative size-full">
              <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0">
                <div className="content-stretch flex flex-col h-full items-end justify-center relative shrink-0 w-[600px]">
                  {Array.from({length: 5}, (_, i) => i).map((_, i) => (
                    <div key={i} className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 w-full">
                      {Array.from({length: 14}, (_, i) => i).map((_, j) => (
                        <div key={j} className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
                          <div aria-hidden="true" className="absolute border-[#2d2d2d] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="absolute content-stretch flex items-center justify-end right-0 translate-y-[-50%]" style={{ top: "calc(50% - 0.375px)" }}>
                  {Array.from({length: 3}, (_, i) => i).map((_, i) => (
                    <div key={i} className="h-[69.415px] relative shrink-0 w-[600px]">
                      <div className="absolute bottom-[-1.3%] left-0 right-[-0.01%] top-[-0.85%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 602 72">
                          <path d={svgPaths.p1e9f9400} fill="var(--stroke-0, white)" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#2d2d2d] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

// Top row: Maps (40% height)
function TopRow() {
  return (
    <div className="basis-[40%] content-stretch flex gap-[10px] items-start min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="Top Row">
      <div className="basis-[60%] grow min-h-px min-w-px relative shrink-0">
        <Map />
      </div>
      <div className="basis-[40%] grow min-h-px min-w-px relative shrink-0">
        <FullTrackMap />
      </div>
    </div>
  );
}

// Middle row: Data charts (35% height)
function MiddleRow() {
  return (
    <div className="basis-[35%] content-stretch flex gap-[10px] items-start min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="Middle Row">
      <div className="basis-0 content-stretch flex flex-col gap-[10px] grow h-full items-start min-h-px min-w-px overflow-clip relative shrink-0">
        <DataVisualization title="Control Heading Errors" />
      </div>
      <div className="basis-0 content-stretch flex flex-col gap-[10px] grow h-full items-start min-h-px min-w-px overflow-clip relative shrink-0">
        <DataVisualization title="GPS" />
      </div>
      <div className="basis-0 content-stretch flex flex-col gap-[10px] grow h-full items-start min-h-px min-w-px overflow-clip relative shrink-0">
        <DataVisualization title="Steering" />
      </div>
    </div>
  );
}

// Bottom row: Planner and Safety (25% height)
function BottomRow() {
  return (
    <div className="basis-[25%] content-stretch flex gap-[10px] items-start min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="Bottom Row">
      <div className="basis-[50%] grow min-h-px min-w-px relative shrink-0">
        <PlannerSection />
      </div>
      <div className="basis-[50%] grow min-h-px min-w-px relative shrink-0">
        <SafetyMonitor />
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow h-full items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Main">
      <TopRow />
      <MiddleRow />
      <BottomRow />
    </div>
  );
}

// Sidebar components for planner and safety monitor

function PlannerSection() {
  return (
    <div className="basis-0 bg-gradient-to-b from-[rgba(255,255,255,0.04)] grow h-full min-h-px min-w-px relative rounded-[15px] shrink-0 to-[rgba(255,255,255,0.02)]">
      <div aria-hidden="true" className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="relative size-full">
        <div className="box-border content-start flex flex-wrap gap-[20px] items-start p-[20px] relative size-full">
          <div className="box-border content-stretch flex gap-[10px] h-[24px] items-start pb-[20px] pt-0 px-0 relative shrink-0 w-[668px]">
            <div className="basis-0 font-['IBM_Plex_Sans_Condensed:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[18px] text-nowrap tracking-[0.18px] uppercase">
              <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Planner</p>
            </div>
          </div>
          
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[639px]">
            {/* Vehicle data rows */}
            <div className="content-start flex flex-wrap gap-[20px] items-start relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px relative shrink-0">
                <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0 w-full">
                  <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white">
                    <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">actual speed</p>
                  </div>
                  <div className="capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-right text-white">
                    <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">0.00 mph</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0 w-full">
                  <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap">
                    <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">desired speed</p>
                  </div>
                  <div className="capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap text-right">
                    <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">0.00 mph</p>
                  </div>
                </div>
                {/* Speed input section */}
                <div className="box-border content-stretch flex gap-[8px] h-[35px] items-end justify-end px-0 py-[5px] relative shrink-0 w-full">
                  <div className="h-full relative rounded-[2px] shrink-0 w-[100px]">
                    <div className="box-border content-stretch flex gap-[10px] h-full items-center overflow-clip pl-[8px] pr-[4px] py-[5px] relative w-[100px]">
                      <div className="capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] h-full justify-center leading-[0] not-italic relative shrink-0 text-[#707070] text-[12px] w-[80px]">
                        <p className="leading-[normal]">Speed Input</p>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[2px]" />
                  </div>
                  <div className="h-full relative rounded-[2px] shrink-0">
                    <div className="box-border content-stretch flex gap-[10px] h-full items-center justify-center overflow-clip px-[6px] py-[11px] relative">
                      <div className="relative shrink-0 size-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p5489700} fill="var(--fill-0, #707070)" />
                        </svg>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[2px]" />
                  </div>
                </div>
              </div>
              
              <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px relative shrink-0">
                <div className="content-stretch flex gap-[10px] h-[23px] items-center relative shrink-0 w-full">
                  <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white">
                    <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">engine temp</p>
                  </div>
                  <div className="capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-right text-white">
                    <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">2.6</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[10px] h-[23px] items-center relative shrink-0 w-full">
                  <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white">
                    <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">RPM</p>
                  </div>
                  <div className="capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-right text-white">
                    <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">7500</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[10px] h-[23px] items-center relative shrink-0 w-full">
                  <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-white">
                    <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">gear</p>
                  </div>
                  <div className="capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-right text-white">
                    <p className="leading-[normal] overflow-ellipsis overflow-hidden whitespace-pre">1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SafetyMonitor() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.04)] relative rounded-[15px] shrink-0 to-[rgba(255,255,255,0.02)] w-[782px]">
      <div className="box-border content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[20px] relative w-[782px]">
        <div className="box-border content-stretch flex gap-[10px] h-[24px] items-start pb-[20px] pt-0 px-0 relative shrink-0 w-full">
          <div className="basis-0 font-['IBM_Plex_Sans_Condensed:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[18px] text-nowrap tracking-[0.18px] uppercase">
            <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Safety Monitor</p>
          </div>
        </div>
        
        <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[221px]">
            {["Cisco Stop", "MyLaps Stop", "Flag Stop", "No-Path Stop", "Lateral Error Stop", "Path Gap Stop", "Planner Calc Stop"].map((item, index) => (
              <div key={index}>
                <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0 w-full">
                  <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap">
                    <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">{item}</p>
                  </div>
                  <div className="opacity-0 relative rounded-[43px] shrink-0 size-[12px]">
                    <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[43px]" />
                  </div>
                </div>
                {index < 6 && (
                  <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-0 py-px relative shrink-0 w-full">
                    <div className="bg-[rgba(255,255,255,0.1)] h-px shrink-0 w-full" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[270px]">
            {["Planner Timeout Stop", "Lateral Control Stop", "Localization Timeout Stop", "Localization Quality Stop", "Object Stop", "Long Control Timeout Stop", "Human Stop"].map((item, index) => (
              <div key={index}>
                <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0 w-full">
                  <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#707070] text-[16px] text-nowrap">
                    <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">{item}</p>
                  </div>
                  <div className="opacity-0 relative rounded-[43px] shrink-0 size-[12px]">
                    <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[43px]" />
                  </div>
                </div>
                {index < 6 && (
                  <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-0 py-px relative shrink-0 w-full">
                    <div className="bg-[rgba(255,255,255,0.1)] h-px shrink-0 w-full" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[196px]">
            {["Raptor Stop", "Diagnostic Error", "Soft Stop", "Hard Stop", "Front Lidar Status", "Left Lidar Status", "Right Lidar Status"].map((item, index) => (
              <div key={index}>
                <div className="content-stretch flex gap-[10px] h-[24px] items-center relative shrink-0 w-full">
                  <div className="basis-0 capitalize flex flex-col font-['IBM_Plex_Mono:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[index === 2 ? '#e55937' : '#707070'] text-[16px] text-nowrap">
                    <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">{item}</p>
                  </div>
                  {index === 2 ? (
                    <div className="bg-[#e55937] content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip relative rounded-[43px] shrink-0 size-[15px]">
                      <div className="flex flex-col font-['DIN_Next_LT_Pro:Heavy',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#131517] text-[12px] text-center uppercase w-full">
                        <p className="leading-[normal]">!</p>
                      </div>
                    </div>
                  ) : (
                    <div className="opacity-0 relative rounded-[43px] shrink-0 size-[12px]">
                      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[43px]" />
                    </div>
                  )}
                </div>
                {index < 6 && (
                  <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-0 py-px relative shrink-0 w-full">
                    <div className="bg-[rgba(255,255,255,0.1)] h-px shrink-0 w-full" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function ControlButtons() {
  return (
    <div className="basis-0 bg-gradient-to-b from-[rgba(255,255,255,0.04)] grow min-h-px min-w-px relative rounded-[15px] shrink-0 to-[rgba(255,255,255,0.02)]">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[20px] relative w-full">
          <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
            <div className="basis-0 content-start flex flex-wrap gap-[16px] grow items-start min-h-px min-w-px relative shrink-0">
              <div className="relative rounded-[2px] shrink-0">
                <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[12px] py-[10px] relative">
                  <div className="capitalize font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#707070] text-[16px] text-nowrap">
                    <p className="leading-[normal] whitespace-pre">Engine Start</p>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#707070] border-solid inset-0 pointer-events-none rounded-[2px]" />
              </div>
              <div className="relative rounded-[2px] shrink-0">
                <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[12px] py-[10px] relative">
                  <div className="capitalize font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                    <p className="leading-[normal] whitespace-pre">Engine Stop</p>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#252525] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function SideUseThisForResize() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-full items-start relative shrink-0 w-[782px]" data-name="Side (Use this for resize)">
      <ControlButtons />
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

function BurgerIcon() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[4px] items-center justify-center left-[9px] p-[10px] rounded-[37px] size-[36px] top-[16px]" data-name="Burger Icon">
      {Array.from({length: 3}, (_, i) => i).map((_, i) => (
        <div key={i} className="bg-white h-[2px] shrink-0 w-full" />
      ))}
    </div>
  );
}

export default function RacingDashboard() {
  return (
    <div className="bg-[#18181a] relative size-full" data-name="Racing Dashboard">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center pb-[10px] pt-[25px] px-[10px] relative size-full">
          <Article />
          <BurgerIcon />
        </div>
      </div>
    </div>
  );
}