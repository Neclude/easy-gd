var should = require('should'),
    gd = require('../index.js'),
    _ = require('underscore'),
    testData = require('./data.js')

describe('gd', function () {
    describe('getFormatPtr()', function () {
        testData.forBufferType(function (buffer, type) {
            it('should detect ' + type, function () {
                gd.getFormatPtr(buffer).should.equal(type)
            })
        })
        it('should throw unknown_format error on bad data', function () {
            _.partial(gd.getFormatPtr, new Buffer('BADDATA')).should.throw('Unknown image format')
        })
    })

    describe('createFromPtr()', function () {
        testData.forBufferType(function (buffer, type) {
            it('should open ' + type + ' buffer', function () {
                var image = gd.createFromPtr(buffer)
                image.should.be.an.instanceof(gd.Image)
                image.width.should.equal(1)
                image.height.should.equal(1)
                image.format.should.equal(type)
            })
        })
        it('should throw unknown_format error on bad data', function () {
            _.partial(gd.getFormatPtr, new Buffer('BADDATA')).should.throw('Unknown image format')
        })
    })
})
