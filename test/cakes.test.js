import test from 'unit.js'
import document from '../mockups/document.js'
import cakes from '../cakes.js'

global.document = document

describe('Cakes', () => {
    it('set (name, value)', () => {
        const name = 'test'
        const value = 'abc123'
        cakes.set(name, value)
        test.value(document.cookie.includes(name + '=' + value)).is(true)
    })
    it('set (\'\', value)', () => {
        const value = 'abc123'
        cakes.set('', value)
        test.value(document.cookie.includes(';=' + value)).is(false)
    })
    it('set (name, value, exdays)', () => {
        const name = 'test'
        const value = 'abc123'
        const exdays = 1
        const d = new Date()
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
        cakes.set(name, value, exdays)
        console.log(document.cookie)
        test.value(document.cookie.includes(name + '=' + value + ';' + 'expires=' + d.toUTCString())).is(true)
    })
    it('get', () => {
        const name = 'test'
        const value = 'abc123'
        const res = cakes.get(name)
        test.value(res).is(value)
    })
    it('get (\'\')', () => {
        const res = cakes.get('')
        test.value(res).is(null)
    })
    it('get (\'foo\')', () => {
        const res = cakes.get('foo')
        test.value(res).is(null)
    })
    it('remove', () => {
        const name = 'test'
        cakes.remove(name)
        test.value(document.cookie.includes(name + '=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/')).is(true)
    })
    it('remove (\'\')', () => {
        document.clearCookie()
        cakes.remove('')
        test.value(document.cookie.includes('=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/')).is(false)
    })
    it('remove (\'foo\')', () => {
        document.clearCookie()
        cakes.remove('foo')
        test.value(document.cookie.includes('foo=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/')).is(false)
    })
    it('isset', () => {
        const name = 'test'
        cakes.set(name, 'abc')
        test.value(cakes.isset(name)).is(true)
    })
    it('isset (\'\')', () => {
        test.value(cakes.isset('')).is(false)
    })
    it('isset (\'testabc\')', () => {
        test.value(cakes.isset('testabc')).is(false)
    })
})