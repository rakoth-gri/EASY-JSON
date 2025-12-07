const Errors = {
  getEntities: `
<code><strong class='purple'>{</strong> 
    "statusCode": 400,
    "message": '<span class='danger'>сообщение ошибке...</span>',
    "timestamp": "2025-11-25T09:02:34.843Z",
    "path": "<span class='danger'>/\${endpoint}</span>",
<strong class='purple'>}</strong>           
</code>`,
  getEntitiesQS: `
<code><strong class='purple'>{</strong> 
    "statusCode": 400,
    "message": '<span class='danger'>сообщение ошибке...</span>',
    "timestamp": "2025-11-25T09:02:34.843Z",
    "path": "<span class='danger'>/\${endpoint}</span>",
<strong class='purple'>}</strong>           
</code>
`,
  getSingleEntity: `
<code><strong class='purple'>{</strong> 
    "statusCode": 400,
    "message": '<span class='danger'>Entity with ID 999 not found</span>',
    "timestamp": "2025-11-25T09:02:34.843Z",
    "path": "<span class='danger'>/\${endpoint}</span>",
<strong class='purple'>}</strong>           
</code>`,
  getSearchedEntity: `
<code>// При неудачном поиске - возвращается пустой массив   

<strong class='purple'>{</strong>  
    "data":[], // <span class='danger'>пустой массив, ошибки нет!</span>   
    "page":1,
    "limit":0,
    "total":0,
    "totalPages":1,
<strong class='purple'>}</strong>
</code>`,
  addEntity: `
<code><strong class='purple'>{</strong>    
    "statusCode": 400,
    "message": '<span class='danger'>Ошибка валидации данных</span>',
    "errors": <span class='purple'>[</span> ошибка 1, ошибка 2, ..., ошибка N <span class='purple'>]</span>,
    "timestamp": "2025-11-25T09:02:34.843Z",
    "path": "<span class='danger'>/\${endpoint}</span>",
<span class='purple'>}</strong>
</code>`,
  deleteEntity: `
<code><strong class='purple'>{</strong> 
    "statusCode": 400,
    "message": '<span class='danger'>Entity with ID 999 not found</span>',
    "timestamp": "2025-11-25T09:02:34.843Z",
    "path": "<span class='danger'>/\${endpoint}</span>",
<strong class='purple'>}</strong>           
</code>
`,
};

export { Errors };
