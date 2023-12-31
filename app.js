const headBox = [
    {
        title: "waiting",
        value: 12,
        description: 'waiting',
        color: '#0d77ee',
        lineColor: '#0000ff'
    },
    {
        title: "in progress",
        value: 43,
        description: 'in progress',
        color: '#FF5733',
        lineColor: '#FF5733Border'
    },
    {
        title: "on hold",
        value: 22,
        description: 'on hold',
        color: '#FFC300',
        lineColor: '#FFC300Border'
    },
    {
        title: "overtime",
        value: 61,
        description: 'overtime',
        color: '#FF5733',
        lineColor: '#FF5733Border'
    },
    {
        title: "completed",
        value: 9,
        description: 'completed',
        color: '#33FF33',
        lineColor: '#33FF33Border'
    },
];
const headBox2 = [
    {
        title: "total",
        value: 27,
        description: 'total',
        color: '#0066FF',
        lineColor: '#0066FFBorder'
    },
    {
        title: "appointments",
        value: 10,
        description: 'appointments',
        color: '#800080',
        lineColor: '#800080Border'
    },
    {
        title: "Technician",
        value: 20,
        description: 'Technician',
        color: '#9932CC',
        lineColor: '#9932CCBorder'
    }
];

const progressData = [{
    name: "Total Revenue",
    value: "75",
    Actual: "150,000",
    Plan: "200,000",
    color: '#4ac8e5'
},
{
    name: "Total Cost",
    value: "81",
    Actual: "137,000",
    Plan: "170,000",
    color: '#f7d972'
},
{
    name: "Total Margin",
    value: "43",
    Actual: "13,000",
    Plan: "30,000",
    color: '#fa44ef'
},
]

// header Boxes

const boxWrap = document.getElementById('boxesWrap');
const boxWrap2 = document.getElementById('boxesWrap2');
const headBoxMappedData = headBox.map((data, index) => {
    return `<div class="headBox">
    <span style="color: ${data.color}">${data.title}</span>
    <div style="background: ${data.color}"> 
        ${data.value}
    </div>
    <span>${data.title}</span>
</div>`;
});
const headBoxMappedData2 = headBox2.map((data, index) => {
    return `<div class="headBox">
    <span style="color: ${data.color}">${data.title}</span>
    <div style="background: ${data.color}"> 
        ${data.value}
    </div>
    <span>${data.title}</span>
</div>`;
});
boxWrap.innerHTML = headBoxMappedData.join('');
boxWrap2.innerHTML = headBoxMappedData2.join('');


// Progress Boxes
const progressWrap = document.getElementById('progressWrapp')
const porgressMappedData = progressData.map((data, index) => {
    return ` 
            <div class="progressBox">
                    <div class="progressBoxHead">
                        <div>
                                <h3>${data.name}</h3>
                                <span style="color:${data.color}">${data.value}%</span>
                         </div>
                        <div>
                                <h5>Actual: ${data.Actual}</h5>
                                <h6>Plan: ${data.Plan}</h6>
                         </div>
                     </div>
                    <div>
                            <progress id="file"  value="${data.value}" max="100"></progress>
                     </div>
                 </div>

    `

})

progressWrap.innerHTML = porgressMappedData.join()


// Workload

Highcharts.chart('workLoad', {
    chart: {
        type: 'bar',
        // backgroundColor: '#3f4d6a'
    },
    title: {
        text: 'Workload',
        align: 'left',
        style: {
            fontFamily: "Arial, Helvetica, sans-serif"

        }
    },
    xAxis: {
        categories: ['Dany', 'Adam', 'Zooma', 'Steephanie', 'Kerala']
    },
    yAxis: {
        min: 0,
        title: {
            text: null
        }
    },
    legend: {
        reversed: true,
        align: 'left',
        verticalAlign: 'top'

    },
    credits: {
        enabled: false
    },
    plotOptions: {
        series: {
            stacking: 'normal',
            dataLabels: {
                enabled: false
            }
        }
    },
    series: [{
        name: 'Over due',
        data: [4, 4, 6, 15, 12]
    }, {
        name: 'Remaining',
        data: [5, 3, 12, 6, 11]
    }, {
        name: 'Completed',
        data: [5, 15, 8, 5, 8]
    }]
});



// Service Chart 
// Generate test data with discrete X values and continuous Y values.
const getTestData = x => {
    const off = 0.2 + 0.2 * Math.random();
    return new Array(200).fill(1).map(() => [
        x,
        off + (Math.random() - 0.5) * (Math.random() - 0.5)
    ]);
};

// Make all the colors semi-transparent so we can see overlapping dots
const colors = Highcharts.getOptions().colors.map(color =>
    Highcharts.color(color).setOpacity(0.5).get()
);

Highcharts.chart('serviceChart', {
    chart: {
        type: 'scatter'
    },

    colors,

    title: {
        text: 'Service Timeline',
        align:'left'

    },
    subtitle: {
        text: 'Vehicle with upcomin service',
        align:'left'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
    },

    yAxis: {
        labels: {
            enabled: false
        },
        title: {
            text: null
        }
    },
credits:{
enabled:false
},
    plotOptions: {
        scatter: {
            showInLegend: false,
            jitter: {
                x: 0.24,
                y: 0
            },
            marker: {
                radius: 2,
                symbol: 'circle'
            },
            tooltip: {
                pointFormat: 'Measurement: {point.y:.3f}'
            }
        }
    },

    series: [{
        name: 'Run 1',
        data: getTestData(0)
    }, {
        name: 'Run 2',
        data: getTestData(1)
    }, {
        name: 'Run 3',
        data: getTestData(2)
    }, {
        name: 'Run 4',
        data: getTestData(3)
    }, {
        name: 'Run 5',
        data: getTestData(4)
    }]
});




// DHX Schedular Chart
window.addEventListener("DOMContentLoaded", function(){
    scheduler.plugins({
        multisection: true,
        timeline: true,
        units: true,
        multiselect: true
    });
    scheduler.config.multisection = true;

    scheduler.templates.event_class = function(start, end, event){
        var original = scheduler.getEvent(event.id);
        if(!scheduler.isMultisectionEvent(original))
            return "";
        return "multisection section_" + event.section_id;
    };

    scheduler.locale.labels.timeline_tab = "Timeline";
    scheduler.locale.labels.unit_tab = "Unit";
    scheduler.locale.labels.section_custom = "Section";

    var sections = [
        {key: 1, label: "James Smith"},
        {key: 2, label: "John Williams"},
        {key: 3, label: "David Miller"},
        {key: 4, label: "Linda Brown"}
    ];

    scheduler.createTimelineView({
        name: "timeline",
        x_unit: "hour",
        x_date: "%H:%i",
        x_step: 8,
        x_size: 33,
        x_length:33,
        event_dy:60,
        resize_events:false,
        y_unit: sections,
        y_property: "section_id",
        render: "bar",
        second_scale:{
            x_unit: "day", // unit which should be used for second scale
            x_date: "%F %d" // date format which should be used for second scale, "July 01"
        }
    });
    scheduler.date.timeline_start = scheduler.date.day_start;
    scheduler.createUnitsView({
        name: "unit",
        property: "section_id",
        list: sections
    });

    scheduler.config.lightbox.sections = [
        { name: "description", height: 130, map_to: "text", type: "textarea", focus: true},
        { name:"custom", height:22, map_to:"section_id", type:"multiselect", options: sections, vertical:"false" },
        { name: "time", height: 72, type: "time", map_to: "auto"}
    ];

    scheduler.init('scheduler_here', new Date(2022, 5, 30), "timeline");

    scheduler.parse([
        { start_date: "2022-06-30 09:00", end_date: "2022-06-30 18:00", text:"Task A-12458", section_id:'1'},
        { start_date: "2022-06-30 10:00", end_date: "2022-06-30 16:00", text:"Task A-89411", section_id:'1'},
        { start_date: "2022-06-30 4:00", end_date: "2022-06-30 15:00", text:"Task 1,3", section_id:'1,3'},
        { start_date: "2022-06-30 16:00", end_date: "2022-07-01 17:00", text:"Task A-46598", section_id:'1'},

        { start_date: "2022-07-04 00:00", end_date: "2022-07-04 23:00", text:"Task 2,3,4", section_id:'2,3,4'},
        { start_date: "2022-07-01 02:00", end_date: "2022-07-01 16:00", text:"Task B-44864", section_id:'2'},

        { start_date: "2022-07-06 02:00", end_date: "2022-07-06 18:00", text:"Task C-32421", section_id:'3'},
        { start_date: "2022-07-02 08:30", end_date: "2022-07-02 19:45", text:"Task 3,1", section_id:'3,1'},


        { start_date: "2022-06-30 11:40", end_date: "2022-07-02 16:30", text:"Task 4,2,3", section_id:'4,2,3'},
        { start_date: "2022-06-30 12:00", end_date: "2022-06-30 18:00", text:"Task D-12458", section_id:'4'}
    ]);
});