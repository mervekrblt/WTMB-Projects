import test from 'ava'
import request from 'supertest'
import app from '../app'

test('Render a view', async t => {
    const view = await request(app)
        .get('/index')

        const view2 = await request(app)
        .get('/')
    
    t.is(view.status, 200)
    t.is(view2.status, 200)
})