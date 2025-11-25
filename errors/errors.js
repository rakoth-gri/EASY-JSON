const Errors = {
  getEntities: `
<code><strong class='purple'>{</strong> 
    "statusCode": 400,
    "message": <span class='danger'>сообщение об ошибке...</span>,
    "timestamp": "2025-11-25T09:02:34.843Z,
    "path": "<span class='danger'>локализация места ошибки...</span>",
<strong class='purple'>}</strong>           
</code>`,
  getEntitiesQS: `
<code><strong class='purple'>{</strong> 
    "statusCode": 400,
    "message": <span class='danger'>сообщение об ошибке...</span>,
    "timestamp": "2025-11-25T09:02:34.843Z,
    "path": "<span class='danger'>локализация места ошибки...</span>",
<strong class='purple'>}</strong>           
</code>
`,
  getSingleEntity: `
<code><strong class='purple'>{</strong> 
    "statusCode": 400,
    "message": <span class='danger'>сообщение об ошибке...</span>,
    "timestamp": "2025-11-25T09:02:34.843Z,
    "path": "<span class='danger'>локализация места ошибки...</span>",
<strong class='purple'>}</strong>           
</code>`,
  getSearchedEntity: `
<code>
<strong class='purple'>{</strong>    
    
<strong class='purple'>}</strong>
</code>`,
  addEntity: `
<code><strong class='purple'>{</strong>    
    "statusCode": 400,
    "message": <span class='danger'>Validation failed</span>,
    "errors": <span class='purple'>[</span> ошибка 1, ошибка 2, ..., ошибка N <span class='purple'>]</span>,
    "timestamp": "2025-11-25T09:02:34.843Z,
    "path": "<span class='danger'>локализация места ошибки...</span>",
<span class='purple'>}</strong>
</code>`,
  deleteEntity: `
<code><strong class='purple'>{</strong> 
    "statusCode": 400,
    "message": <span class='danger'>сообщение об ошибке...</span>,
    "timestamp": "2025-11-25T09:02:34.843Z,
    "path": "<span class='danger'>локализация места ошибки...</span>",
<strong class='purple'>}</strong>           
</code>
`,
};

export { Errors };
