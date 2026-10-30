// ADD MORE QUESTIONS HERE. "answer" is the index (0-based) of the correct option.
const SUBJECTS = ["Production & Operations Management", "Supply Chain Management", "Lean & Six Sigma", "Total Quality Management", "Work System Design"];
const P = SUBJECTS[0], S = SUBJECTS[1], L = SUBJECTS[2], T = SUBJECTS[3], W = SUBJECTS[4];
const Q = (subject, level, concept, q, options, answer, explanation) => ({ subject, level, concept, q, options, answer, explanation });

const QUESTIONS = [
// ---------- Production & Operations Management ----------
Q(P,"Easy","Forecasting","Which forecasting method uses the average of the most recent n periods?",["Exponential smoothing","Moving average","Regression","Delphi"],1,"A simple moving average averages the latest n observations."),
Q(P,"Easy","Capacity Planning","Capacity utilization is defined as:",["Output / Design capacity","Design capacity / Output","Output × Time","Demand / Supply"],0,"Utilization = actual output ÷ design capacity."),
Q(P,"Easy","Layouts","Which layout groups similar machines together?",["Product layout","Process layout","Fixed-position layout","Cellular layout"],1,"Process (functional) layout groups similar processes/machines."),
Q(P,"Medium","Inventory","EOQ is 200 units for D=4000/yr and S=Rs.100. What is the holding cost per unit per year (H)?",["Rs.20","Rs.10","Rs.40","Rs.5"],0,"EOQ=√(2DS/H) → 200²=2·4000·100/H → H=800000/40000=20."),
Q(P,"Medium","Scheduling","Johnson's rule is used for:",["Job shop with 3 machines always","Minimising makespan for 2-machine flow shop","Line balancing","Forecast error"],1,"Johnson's rule sequences n jobs on 2 machines to minimise total makespan."),
Q(P,"Medium","MRP","In MRP, the Bill of Materials gives:",["Demand forecast","Product structure and component quantities","Machine capacity","Supplier rating"],1,"BOM lists components and quantities needed per parent item."),
Q(P,"Hard","Forecasting","Exponential smoothing with α=0.2, previous forecast 100, actual 110. Next forecast?",["102","108","110","104"],0,"F = 100 + 0.2(110−100) = 102."),
Q(P,"Hard","Inventory","In a (Q, R) system, lead time demand has mean 100 and σ=20; z=1.65. Reorder point?",["133","120","165","100"],0,"R = 100 + 1.65×20 = 133."),
Q(P,"Hard","Aggregate Planning","Which aggregate planning strategy keeps workforce constant and varies inventory/backlog?",["Chase","Level","Mixed hire/fire","Subcontract only"],1,"Level strategy holds output constant, absorbing demand swings with inventory."),

// ---------- Supply Chain Management ----------
Q(S,"Easy","Basics","The bullwhip effect refers to:",["Falling prices","Demand variability amplifying upstream","Supplier delays","Warehouse theft"],1,"Small demand changes at retail cause larger swings upstream."),
Q(S,"Easy","Logistics","Which transport mode is generally cheapest for bulk, long-distance goods?",["Air","Road","Rail/Water","Courier"],2,"Rail and water have the lowest cost per tonne-km for bulk goods."),
Q(S,"Easy","Basics","A 3PL provider is:",["Third-party logistics provider","Three-phase line","Third product launch","Triple price level"],0,"3PL outsources logistics functions to a third party."),
Q(S,"Medium","Strategy","A responsive supply chain suits which product type?",["Functional","Innovative","Commodity","Staple"],1,"Innovative products with uncertain demand need responsiveness."),
Q(S,"Medium","Inventory","Vendor-managed inventory (VMI) mainly helps to:",["Increase lead time","Reduce bullwhip via shared demand data","Raise holding cost","Remove suppliers"],1,"Suppliers see real demand and replenish accordingly."),
Q(S,"Medium","Network Design","Risk pooling by centralising inventory reduces safety stock because:",["Demand is higher","Combined σ grows slower than sum of σ","Lead time is zero","Costs vanish"],1,"Aggregate σ = √n·σ for independent demand, which is less than n·σ."),
Q(S,"Hard","Metrics","Cash-to-cash cycle time =",["DIO + DSO − DPO","DIO + DPO − DSO","DSO + DPO","DIO − DSO"],0,"Days inventory + days sales outstanding − days payable outstanding."),
Q(S,"Hard","Contracts","A buyback contract primarily:",["Shifts overstock risk to supplier","Eliminates demand","Raises wholesale price only","Is a transport contract"],0,"Supplier repurchases unsold units, encouraging larger retailer orders."),
Q(S,"Hard","Network Design","The transportation problem's optimal solution is tested using:",["MODI/u-v method","Johnson's rule","Pareto chart","Gantt"],0,"MODI checks optimality of an initial basic feasible solution."),

// ---------- Lean & Six Sigma ----------
Q(L,"Easy","Lean Basics","Which is NOT one of the 7 wastes (TIMWOOD)?",["Transport","Overproduction","Innovation","Waiting"],2,"Innovation is not a waste; the 7 are Transport, Inventory, Motion, Waiting, Overproduction, Over-processing, Defects."),
Q(L,"Easy","Six Sigma","DMAIC stands for:",["Define Measure Analyze Improve Control","Design Make Assess Inspect Check","Define Map Act Implement Close","Detect Measure Adjust Improve Control"],0,"Standard Six Sigma problem-solving cycle."),
Q(L,"Easy","Lean Tools","5S begins with:",["Sort","Shine","Sustain","Standardize"],0,"Seiri (Sort) is first: Sort, Set in order, Shine, Standardize, Sustain."),
Q(L,"Medium","Lean Tools","Takt time =",["Available time / Customer demand","Demand / Available time","Cycle time × Operators","Lead time − Value-add time"],0,"Takt = available production time ÷ customer demand."),
Q(L,"Medium","Six Sigma","6σ with 1.5σ shift corresponds to about:",["3.4 DPMO","233 DPMO","6210 DPMO","66807 DPMO"],0,"Six Sigma ≈ 3.4 defects per million opportunities."),
Q(L,"Medium","Lean Tools","Kanban is a ______ system.",["Push","Pull","Forecast-driven","Random"],1,"Kanban signals replenishment only when downstream consumes."),
Q(L,"Hard","Six Sigma","A process has mean 50, σ=2, USL=58, LSL=42. Cp?",["1.33","1.00","2.00","0.67"],0,"Cp=(USL−LSL)/6σ=16/12=1.33."),
Q(L,"Hard","Six Sigma","Cpk when mean=52, σ=2, USL=58, LSL=42:",["1.00","1.67","1.33","0.67"],0,"Cpk=min((58−52)/6,(52−42)/6)=min(1,1.67)=1.00."),
Q(L,"Hard","Lean Tools","In VSM, a process with 60 s cycle time and 10 min WIP queue before it contributes to:",["Lead time including waiting","Only value-added time","Takt time","OEE"],0,"Lead time includes non-value-added queue time."),

// ---------- Total Quality Management ----------
Q(T,"Easy","Gurus","The 14 points for management are associated with:",["Deming","Juran","Crosby","Ishikawa"],0,"W. Edwards Deming proposed the 14 points."),
Q(T,"Easy","Tools","Which chart shows the 80/20 rule?",["Pareto chart","Scatter diagram","Histogram","Control chart"],0,"Pareto charts rank causes by frequency/impact."),
Q(T,"Easy","Basics","PDCA stands for:",["Plan Do Check Act","Plan Design Control Adjust","Prepare Do Check Audit","Predict Define Control Act"],0,"The Deming/Shewhart cycle."),
Q(T,"Medium","Tools","Fishbone diagram is also called:",["Ishikawa diagram","Gantt chart","Spider chart","Venn diagram"],0,"Used for cause-and-effect analysis."),
Q(T,"Medium","Control Charts","Which chart monitors number of defects per unit?",["c-chart","X-bar chart","p-chart","R-chart"],0,"c-chart counts defects in a constant-size sample."),
Q(T,"Medium","Standards","ISO 9001 focuses on:",["Environmental management","Quality management systems","Information security","Occupational safety"],1,"ISO 9001 is the QMS standard."),
Q(T,"Hard","Costs","Cost of quality: training and process planning fall under:",["Prevention cost","Appraisal cost","Internal failure","External failure"],0,"Prevention costs are incurred to avoid defects."),
Q(T,"Hard","Control Charts","Control limits for X-bar chart are set at:",["Mean ± 3σ/√n","Mean ± 3σ","Mean ± σ","USL and LSL"],0,"Subgroup mean has standard error σ/√n."),
Q(T,"Hard","Tools","QFD's 'House of Quality' translates:",["Customer needs into technical requirements","Costs into prices","Defects into rework","Demand into capacity"],0,"HoQ links the voice of customer to engineering characteristics."),

// ---------- Work System Design ----------
Q(W,"Easy","Method Study","Method study aims to:",["Develop the best method of doing a job","Set wages","Hire staff","Forecast demand"],0,"Method study records and critically examines work to improve it."),
Q(W,"Easy","Work Measurement","Which instrument is used in time study?",["Stopwatch","Micrometer","Vernier caliper","Anemometer"],0,"Stopwatch time study is the standard direct method."),
Q(W,"Easy","Therbligs","Therbligs are:",["Basic elements of motion","Types of layouts","Quality tools","Wage plans"],0,"Gilbreth's 17 basic motion elements."),
Q(W,"Medium","Work Measurement","Standard time =",["Normal time + Allowances","Observed time − Allowances","Normal time × Rating","Cycle time / Rating"],0,"Normal time = observed × rating factor; standard adds allowances."),
Q(W,"Medium","Charts","An operation process chart uses which symbols?",["Circle and square","Arrow and triangle","Only triangle","Diamond only"],0,"OPC uses operation (circle) and inspection (square)."),
Q(W,"Medium","Ergonomics","Anthropometric data is used for:",["Designing workstations to fit body dimensions","Time rating","Cost estimation","Inventory control"],0,"Body measurements guide workstation and tool design."),
Q(W,"Hard","Work Measurement","Observed time 1.2 min, rating 110%, allowances 15% of normal time. Standard time?",["1.518","1.452","1.32","1.38"],0,"NT=1.2×1.10=1.32; ST=1.32×1.15=1.518 min."),
Q(W,"Hard","Work Sampling","Work sampling: p=0.2, desired accuracy ±5% absolute, 95% confidence (Z≈2). Sample size?",["256","400","160","100"],0,"n=Z²·p(1−p)/e² = 4×0.16/0.0025 = 256."),
Q(W,"Hard","Line Balancing","Total task time 120 s, 4 stations, cycle time 40 s. Balance efficiency?",["75%","100%","80%","60%"],0,"Efficiency = 120 / (4×40) = 75%.")
];
