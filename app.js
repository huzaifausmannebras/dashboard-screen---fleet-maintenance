const headBox = [
    {
        title: "waiting",
        value: 2,
        description: 'waiting',
        color: '#0d77ee',
        lineColor: '#0000ff'
    },
    {
        title: "in progress",
        value: 7,
        description: 'in progress',
        color: '#FF5733',
        lineColor: '#FF5733Border'
    },
    {
        title: "on hold",
        value: 7,
        description: 'on hold',
        color: '#FFC300',
        lineColor: '#FFC300Border'
    },
    {
        title: "overtime",
        value: 7,
        description: 'overtime',
        color: '#FF5733',
        lineColor: '#FF5733Border'
    },
    {
        title: "completed",
        value: 7,
        description: 'completed',
        color: '#33FF33',
        lineColor: '#33FF33Border'
    },
    {
        title: "total",
        value: 7,
        description: 'total',
        color: '#0066FF',
        lineColor: '#0066FFBorder'
    },
    {
        title: "appointments",
        value: 7,
        description: 'appointments',
        color: '#800080',
        lineColor: '#800080Border'
    },
    {
        title: "Technician",
        value: 7,
        description: 'Technician',
        color: '#9932CC',
        lineColor: '#9932CCBorder'
    }
];

const boxWrap = document.getElementById('boxesWrap');

const headBoxMappedData = headBox.map((data, index) => {
    return `<div class="headBox">
    <span style="color: ${data.color}">${data.title}</span>

    <div style="background: ${data.color}"> 
        ${data.value}
    </div>
    <span>${data.title}</span>
</div>`;
});

boxWrap.innerHTML = headBoxMappedData.join('');